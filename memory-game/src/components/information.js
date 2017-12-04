import React from 'react';

export function Song(word, description, id) {
    this.word = word;
    this.description = description;
    this.id = id;
}

export const songs = [ 
    new Song('react', 'thing used to code', 0),
    new Song('express', 'thingused to talk back and forth pages', 1),
    new Song('Apple', 'tastes great', 2)
]