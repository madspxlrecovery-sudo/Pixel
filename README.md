# Pixel

Prototipo web estático para GitHub Pages pensado como una extensión no oficial del **Minecraft Marketplace**, especializada en contenido con lenguaje de **Minecraft Dungeons**.

## Regla principal
Pixel ya no trabaja con una filosofía de “hacer algo parecido a Minecraft”.

Para cualquier visual reconocible de Minecraft / Minecraft Dungeons — iconos, marcos, fondos, currency, logos, texturas, badges, pictogramas, etc. — la regla es:

**usar un recurso oficial con uso aprobado, o dejar un placeholder neutral. Nunca crear una imitación.**

Las reglas obligatorias para futuras iteraciones están en [`AGENTS.md`](./AGENTS.md).

## Dirección visual
- **Minecraft Marketplace**: shell, entorno, storefront y fondo general.
- **Minecraft Dungeons**: menús especializados, estados, tipografía, controles e interacción.

## Documentos que mandan
- [`docs/research/OFFICIAL_ASSET_GATE.md`](./docs/research/OFFICIAL_ASSET_GATE.md) — qué recursos están aprobados, solo de referencia, desconocidos o bloqueados.
- [`docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md`](./docs/research/KNOWN_INVALID_IMPLEMENTATIONS.md) — errores visuales ya cometidos que no deben reutilizarse.
- [`docs/research/ASSET_POLICY.md`](./docs/research/ASSET_POLICY.md) — política legal/técnica de recursos.
- [`docs/research/README.md`](./docs/research/README.md) — orden de lectura de la investigación.
- [`docs/research/OFFICIAL_SOURCES.md`](./docs/research/OFFICIAL_SOURCES.md)
- [`docs/research/source-manifest.json`](./docs/research/source-manifest.json)

## Foundation CSS
- [`assets/css/foundation/typography.css`](./assets/css/foundation/typography.css)
- [`assets/css/foundation/tokens.css`](./assets/css/foundation/tokens.css)
- [`assets/css/foundation/dungeons-core.css`](./assets/css/foundation/dungeons-core.css)

Importante: parte del CSS visual actual pertenece al prototipo anterior y está marcado conceptualmente como **legacy/experimental**. No debe asumirse que sus marcos, pictogramas o fondos son componentes finales aprobados.

## Estado actual
Aprobado como base:
- familias tipográficas oficiales documentadas;
- tokens de color exactos publicados por Mojang;
- estructura HTML, accesibilidad, navegación y lógica de estados.

Pendiente de aprobación oficial de assets:
- iconos;
- marcos/bordes gráficos;
- fondos Marketplace;
- currency artwork;
- texturas y decoración visual específica.

## Proyecto no oficial
Pixel no está aprobado ni asociado con Mojang o Microsoft. Los recursos oficiales se investigan respetando sus licencias y restricciones, y un recurso oficial no se considera reutilizable hasta que su estado figure como `APPROVED` en el Asset Gate.
