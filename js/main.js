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

});