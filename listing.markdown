---
layout: sublime
disable_comments: true
title: Listing
---

## Posts

<div>
    <ul id="collections" class="treeview">
        <a href="{{site.url}}">
            <li>Portfolio</li>
        </a>
        {% for collection in site.collections %}
        <li>
            {{collection.label}}
            {% if collection.docs.length != 0 %}
            <ul>
                {% for doc in collection.docs %}
                {% assign filename = doc.url | replace_first: '/', '' | replace: '/', '-'  | replace: '.html', '.md' %}
                <a href="{{filename}}">
                    <li>{{doc.title}}</li>
                </a>
                {% endfor %}
            </ul>
            {% endif %}
        </li>
        {% endfor %}
    </ul>
</div>
