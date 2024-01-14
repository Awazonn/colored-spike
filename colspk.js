spike_imgs = {
        5: [
            ["#0d1b1c", "owner", "white", "#4c3a15", "#634828", "#564021", "#634828", "#4c3a15"],
            ["#030d14", "owner", "white", "#0d2e33", "#184747", "#123b3f", "#0d2e33", "#174444"], create_spike
        ], /// wood spike
        12: [
            ["#0d1b1c", "owner", "white", "#6a7570", "#939995", "#9baaa3", "#adbcb5", "#8a938e"],
            ["#030d14", "owner", "white", "#163a3a", "#214c4b", "#1f4948", "#295957", "#1f5955"], create_spike_stone
        ], /// stone spike
        13: [
            ["#0d1b1c", "owner", "white", "#877d36", "#a08f47", "#a7983c", "#b29e4d", "#c1b06b"],
            ["#030d14", "owner", "white", "#1f4948", "#215e55", "#1f6058", "#2a7773", "#2c7a70"], create_spike_gold
        ], /// gold spike
        14: [
            ["#0d1b1c", "owner", "white", "#5cc5ce", "#89d1d4", "#86d0d1", "#95d5d8", "#e0f2f6", "#b3e0e3"],
            ["#030d14", "owner", "white", "#2b9390", "#43b5af", "#43b5af", "#4bbcb4", "#83ddd4", "#59c9c0"], create_spike_diamond
        ], /// diam spike
        20: [
            ["#0d1b1c", "owner", "white", "#b15ecf", "#8c29aa", "#c26de0", "#af59cd", "#d588f1"],
            ["#030d14", "owner", "white", "#8359d3", "#764eb5", "#8f65de", "#7f55cc", "#9d77e6"], create_spike_stone
        ], /// ame spike
        52: [IMAGES.REIDITE_SPIKED, IMAGES.REIDITE_SPIKEN, undefined] /// reidite spike
    },
    usable_spike_imgs = {
        safe: {
            0: {},
            1: {}
        },
        unsafe: {
            0: {},
            1: {}
        }
    },
    for (let s in usable_spike_imgs) { /// for colors
        s ? "safe" : "unsafe"
        for (let i = 0; i <= 1; i++) { /// for day and night
            for (let img in spike_imgs) {
                if (Array.isArray(spike_imgs[img][0])) {
                    let color = s == "safe" ? "green" : "red"
                    ///console.log(s, color)
                    Object.assign(usable_spike_imgs[s][i], {
                        [img]: spike_imgs[img]?.[2](0.8, true, spike_imgs[img][i].map(e => e.replace("owner", color)))
                    })
                } else {
                    Object.assign(usable_spike_imgs[s][i], {
                        [img]: i ? IMAGES.REIDITE_SPIKEN : IMAGES.REIDITE_SPIKED
                    })
                }
            }
        }
    }
            let owner = this.pid == user.id || user.team.includes(this.pid) ? "safe" : "unsafe" /// green = my, red = enemy
            img = usable_spike_imgs[owner][world.time][this.type]
        } else {
            img = sprite[id][world.time];
        }
        w = -img.width;
        h = -img.height;
        ctxDrawImage(ctx, img, -w / 2 + x, -h / 2 + y, w, h);

        ctx.restore();
    }
