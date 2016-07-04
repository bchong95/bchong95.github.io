---
layout: sublime
images:
  - After_the_Masters.jpg
  - Beginning_With_Chance.jpg
  - Cubistic_World.jpg
  - Drawing_to_Music.jpg
  - Experiment_with_Charcoal.jpg
  - Experiment_with_Color.jpg
  - Experiment_with_Pencil_Part_2.jpg
  - Experiment_with_Pencil.jpg
  - Expressionist_Painting.jpg
  - Expressionist_Self_Portrait.jpg
  - Postcard_from_a_Dream.jpg
  - Reduction_of_Renoir_to_Mondrian.jpg
  - Sleight_of_Hand.jpg
  - Stream_of_Consciousness.jpg
  - Stress.jpg
  - The_Environment_and_Me.jpg
---

## Listing

{% for img in page.images %}

- [{{img}}](./{{img}})

{% endfor %}
