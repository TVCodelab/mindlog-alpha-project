// UV Reveal Shader
// Aplique em qualquer malha que deve aparecer só com luz UV ativa.
// A escrita/marcação fica invisível em luz normal e surge em roxo ao ligar a UV.

shader_type spatial;
render_mode blend_add, depth_draw_opaque, cull_back, unshaded;

// Parâmetro global — controlado por Game.toggle_uv()
global uniform bool uv_active;

// Textura com o conteúdo secreto (texto, símbolo, etc.)
uniform sampler2D albedo_tex : source_color, hint_default_white;
uniform vec4 uv_color : source_color = vec4(0.8, 0.3, 1.0, 1.0);
uniform float glow_intensity : hint_range(0.0, 3.0) = 1.4;

void fragment() {
	vec4 tex = texture(albedo_tex, UV);
	float alpha = tex.a * (uv_active ? 1.0 : 0.0);
	ALBEDO = uv_color.rgb * tex.rgb * glow_intensity;
	ALPHA = alpha;
	EMISSION = uv_color.rgb * tex.rgb * glow_intensity * float(uv_active);
}
