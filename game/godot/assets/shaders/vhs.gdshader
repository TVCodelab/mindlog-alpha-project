shader_type canvas_item;

uniform sampler2D SCREEN_TEXTURE : hint_screen_texture, filter_linear_mipmap;

// VHS controls
uniform float scanline_intensity : hint_range(0.0, 1.0) = 0.55;
uniform float noise_intensity    : hint_range(0.0, 1.0) = 0.18;
uniform float chroma_shift       : hint_range(0.0, 0.02) = 0.006;
uniform float wobble_strength    : hint_range(0.0, 0.01) = 0.003;
uniform float vignette_strength  : hint_range(0.0, 1.0) = 0.65;
uniform float color_bleed        : hint_range(0.0, 1.0) = 0.35;

// Low-res pixelation (set to 640x360 to match viewport)
uniform vec2 pixel_size = vec2(640.0, 360.0);

float rand(vec2 co) {
	return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void fragment() {
	vec2 uv = SCREEN_UV;

	// Pixel snap for low-res feel
	vec2 snapped = floor(uv * pixel_size) / pixel_size;

	// VHS horizontal wobble — stronger at top/bottom edges
	float edge_factor = abs(snapped.y - 0.5) * 2.0;
	float wobble = sin(snapped.y * 48.0 + TIME * 6.0) * wobble_strength * edge_factor;
	// Occasional tracking glitch
	float glitch_line = step(0.994, rand(vec2(floor(TIME * 8.0), floor(snapped.y * 80.0))));
	wobble += glitch_line * wobble_strength * 4.0;
	snapped.x += wobble;
	snapped.x = clamp(snapped.x, 0.0, 1.0);

	// Chromatic aberration (R shifts left, B shifts right)
	vec4 col_r = texture(SCREEN_TEXTURE, snapped + vec2(-chroma_shift, 0.0));
	vec4 col_g = texture(SCREEN_TEXTURE, snapped);
	vec4 col_b = texture(SCREEN_TEXTURE, snapped + vec2(chroma_shift, 0.0));

	vec4 col = vec4(col_r.r, col_g.g, col_b.b, 1.0);

	// Color bleed — smear a bit of left-neighbor red into green channel
	vec4 bleed_l = texture(SCREEN_TEXTURE, snapped + vec2(-chroma_shift * 2.0, 0.0));
	col.g = mix(col.g, col.g * 0.85 + bleed_l.r * 0.15, color_bleed);

	// Scanlines
	float line = floor(snapped.y * pixel_size.y);
	float scan = 1.0 - step(0.5, mod(line, 2.0)) * scanline_intensity;
	col.rgb *= scan;

	// Film grain / static noise
	float noise = rand(snapped + vec2(TIME * 0.27, TIME * 0.13)) * 2.0 - 1.0;
	col.rgb += noise * noise_intensity;

	// Slight desaturation / green tint for old tube phosphor look
	float lum = dot(col.rgb, vec3(0.299, 0.587, 0.114));
	col.rgb = mix(col.rgb, vec3(lum * 0.85, lum * 1.05, lum * 0.75), 0.18);

	// Vignette
	vec2 vig_uv = snapped * (1.0 - snapped.yx);
	float vig = pow(vig_uv.x * vig_uv.y * 16.0, vignette_strength);
	col.rgb *= clamp(vig, 0.0, 1.0);

	COLOR = col;
}
