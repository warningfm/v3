var defaults={
    duration:15000,
    direction:'left',
    textContent:'Lorem Ipsum Dolar Sit Amet. Lorem Ipsum Dolar Sit Amet. Lorem Ipsum Dolar Sit Amet.'
}

var MarqueeOverlay = Clappr.UIContainerPlugin.extend({
    name: 'marquee_overlay',
    initialize: function() {
        this.render();
    },
    bindEvents: function() {
        this.listenTo(this.container, Clappr.Events.CONTAINER_FULLSCREEN, this.show);
    },
    hide: function() {
        this.$el.hide();
    },
    show: function() {
        this.$el.show();
    },
    render: function() {
        defaults.textContent= this.options.marqueePluginConfig.textContent!=null ? this.options.marqueePluginConfig.textContent:"Lorem Ipsum Dolar Sit Amet. Lorem Ipsum Dolar Sit Amet. Lorem Ipsum Dolar Sit Amet.";
        defaults.direction= this.options.marqueePluginConfig.direction!=null ? this.options.marqueePluginConfig.direction:"left";
        defaults.duration= this.options.marqueePluginConfig.duration!=null ? this.options.marqueePluginConfig.duration:15000;
        setTimeout(function(){
            $('.marquee').marquee({
                //speed in milliseconds of the marquee
                duration: defaults.duration,
                //gap in pixels between the tickers
                gap: 50,
                //time in milliseconds before the marquee will start animating
                delayBeforeStart: 0,
                //'left' or 'right'
                direction:defaults.direction,
                //true or false - should the marquee be duplicated to show an effect of continues flow
                duplicated: true
            });
        },100)
        this.$el.html('<div class="clpr-emre marquee">'+defaults.textContent+'</div>');
        this.container.$el.append(this.$el);
        this.show();
        return this;
    }
});


