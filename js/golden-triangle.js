/*global define, console, JSONEditor, document*/
define(['raphael'], function () {

    'use strict';

    function GOLDEN_TRIANGLE(config) {

        config = config || {};

        this.CONFIG = {
            good: config.good || 10,
            fast: config.fast || 10,
            size: config.size || 200,
            cheap: config.cheap || 10,
            fill_color: config.fill_color || 'BC243C',
            axes_color: config.axes_color || 'EFC050',
            circle_color: config.circle_color || 'BC243C',
            placeholder_id: config.placeholder_id || 'placeholder',
            show_axes: config.show_axes !== undefined ? config.show_axes : true,
            show_circle: config.show_circle !== undefined ? config.show_circle : true
        };

    }

    GOLDEN_TRIANGLE.prototype.build = function () {

        /* Variables. */
        var that = this,
            a = this.a(this.CONFIG.good / 10),
            b = this.b(this.CONFIG.fast / 10),
            c = this.c(this.CONFIG.cheap / 10),
            paper;

        /* Clear the placeholder. */
        document.getElementById(that.CONFIG.placeholder_id).innerHTML = '';

        /* Initiate canvas. */
        paper = Raphael(that.CONFIG.placeholder_id, this.CONFIG.size, this.CONFIG.size);

        /* Draw the triangle. */
        paper.path('M ' + a.x + ' ' + a.y + ' L ' + b.x + ' ' + b.y + ' L ' + c.x + ' ' + c.y + ' Z').attr('stroke', this.CONFIG.fill_color).attr('fill', this.CONFIG.fill_color);

        /* Draw the circle. */
        if (this.CONFIG.show_circle) {
            console.debug(this.CONFIG.show_circle);
            paper.circle(that.CONFIG.size / 2, that.CONFIG.size / 2, that.CONFIG.size / 2).attr('stroke', this.CONFIG.circle_color);
        }

        /* Show axes. */
        if (this.CONFIG.show_axes) {
            a = that.a(1);
            b = that.b(1);
            c = that.c(1);
            paper.path('M ' + (that.CONFIG.size / 2) + ' ' + (that.CONFIG.size / 2) + ' ' + a.x + ' ' + a.y + ' Z').attr('stroke', this.CONFIG.axes_color);
            paper.path('M ' + (that.CONFIG.size / 2) + ' ' + (that.CONFIG.size / 2) + ' ' + b.x + ' ' + b.y + ' Z').attr('stroke', this.CONFIG.axes_color);
            paper.path('M ' + (that.CONFIG.size / 2) + ' ' + (that.CONFIG.size / 2) + ' ' + c.x + ' ' + c.y + ' Z').attr('stroke', this.CONFIG.axes_color);
        }

    };

    GOLDEN_TRIANGLE.prototype.a = function (factor) {
        factor = factor !== null ? factor : 1;
        return {
            x: this.a_x(factor),
            y: this.a_y(factor)
        };
    };

    GOLDEN_TRIANGLE.prototype.b = function (factor) {
        return {
            x: this.b_x(factor),
            y: this.b_y(factor)
        };
    };

    GOLDEN_TRIANGLE.prototype.c = function (factor) {
        return {
            x: this.c_x(factor),
            y: this.c_y(factor)
        };
    };

    GOLDEN_TRIANGLE.prototype.a_x = function (factor) {
        var rho = factor * this.CONFIG.size / 2;
        return (this.CONFIG.size / 2) + (rho * 0.866);
    };

    GOLDEN_TRIANGLE.prototype.a_y = function (factor) {
        var rho = factor * this.CONFIG.size / 2;
        return (this.CONFIG.size / 2) + (rho * 0.5);
    };

    GOLDEN_TRIANGLE.prototype.b_x = function (factor) {
        var rho = factor * this.CONFIG.size / 2;
        return (this.CONFIG.size / 2) + (rho * -0.866);
    };

    GOLDEN_TRIANGLE.prototype.b_y = function (factor) {
        var rho = factor * this.CONFIG.size / 2;
        return (this.CONFIG.size / 2) + (rho * 0.5);
    };

    GOLDEN_TRIANGLE.prototype.c_x = function () {
        return this.CONFIG.size / 2;
    };

    GOLDEN_TRIANGLE.prototype.c_y = function (factor) {
        var rho = factor * this.CONFIG.size / 2;
        return (this.CONFIG.size / 2) + (rho * -1);
    };

    return GOLDEN_TRIANGLE;

});