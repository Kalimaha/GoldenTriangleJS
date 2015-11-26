/*global require, document, parseInt*/
require.config({

    baseUrl: 'js/libs',

    paths: {

        raphael: 'raphael-min',
        bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min',
        jquery: '//code.jquery.com/jquery-2.1.4.min',
        goldentriangle: '../golden-triangle'

    },

    shim: {
        goldentriangle: {
            deps: ['raphael']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }

});

/* Start the application. */
require(['jquery', 'goldentriangle', 'bootstrap'], function ($, GoldenTriangle) {

    'use strict';

    var collect = function () {
            return {
                placeholder_id: 'placeholder',
                good: parseInt($('input[name="good"]:checked').val(), 10),
                fast: parseInt($('input[name="fast"]:checked').val(), 10),
                cheap: parseInt($('input[name="cheap"]:checked').val(), 10),
                show_circle: $('#show_circle').is(':checked'),
                show_axes: $('#show_axes').is(':checked'),
                size: parseInt($('#size').val(), 10),
                fill_color: $('#fill_color').val(),
                circle_color: $('#circle_color').val(),
                axes_color: $('#axes_color').val()
            };
        },
        build = function () {
            new GoldenTriangle(collect()).build();
        };

    $('input').change(function () {
        build();
    });

    build();

    /* Pizza ratings. */
    new GoldenTriangle({
        placeholder_id: 'rating_margherita',
        good: 9,
        fast: 7,
        cheap: 8,
        size: 32,
        show_circle: false,
        fill_color: 'orange',
        axes_color: 'blue'
    }).build();
    new GoldenTriangle({
        placeholder_id: 'rating_napoli',
        good: 5,
        fast: 9,
        cheap: 9,
        size: 32,
        show_circle: false,
        fill_color: 'orange',
        axes_color: 'blue'
    }).build();
    new GoldenTriangle({
        placeholder_id: 'rating_capricciosa',
        good: 6,
        fast: 7,
        cheap: 6,
        size: 32,
        show_circle: false,
        fill_color: 'orange',
        axes_color: 'blue'
    }).build();

});