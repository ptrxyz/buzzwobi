<script>
    import Cell from '$lib/Cell.svelte'
    import { fade } from 'svelte/transition'

    Array.prototype.sample = function () {
        return this[Math.floor(Math.random() * this.length)]
    }

    let won = false
    let wonby = 0

    let wordlist = [
        'Ruby',
        'Rails',
        'Node',
        'NPM',
        'Bundler',
        'Rake',
        'Inkscape',
        '3rd Party',
        'ImageMagick',
        'Complexity',
        'Responsibility',
        'Docker',
        'Performance',
        'Isolation',
        'Processes',
        'Simplify',
        'Container',
        'Services',
        'Images',
        'DockerHub',
        'Docusaurus',
        'Chemotion',
        'Glue Code',
        'Command-Line',
        'Scale',
        'Improvement',
        'Upgrade',
        'Significant',
        'Kubernetes',
        'Scripts',
        'Deployment',
        'GitHub',
        'Production-Ready',
        'Setup',
        'Slack',
        'Environment',
        'ELN',
    ]

    let cells = [...Array(16)].map((x, i) => {
        return { id: i, state: false, word: wordlist.sample() }
    })

    function toggle(cell, e) {
        console.log(cell)
        cell = { ...cell, state: !cell.state }
        cells[cell.id] = cell

        function checkWin(arr) {
            return arr.every((elem_id) => {
                return cells[elem_id].state == true
            })
        }

        let tocheck = []

        tocheck.push(
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [8, 9, 10, 11],
            [12, 13, 14, 15]
        )
        tocheck.push(
            [0, 4, 8, 12],
            [1, 5, 9, 13],
            [2, 6, 10, 14],
            [3, 7, 11, 15]
        )

        tocheck.push([0, 5, 10, 15], [3, 6, 9, 12])

        wonby = 0
        for (let i = 0; i < tocheck.length; i++) {
            let woncon = tocheck[i]
            if (checkWin(woncon)) {
                wonby += 1
            }
        }
        won = wonby > 0
    }
</script>

{#if won}
    <div class="win" transition:fade>
        <h1>Congratulations!</h1>
        You won! Please inform the speaker, he is using too many buzzwords... :)
        {#if wonby > 4}
            <p style="color: orange">Oh my god... so many winnings...!</p>
        {/if}
    </div>
{/if}
<cellgrid class:won>
    {#each cells as cell (cell.id)}
        <Cell done={cell.state} on:click={(e) => toggle(cell, e)}
            >{cell.word}</Cell
        >
    {/each}
</cellgrid>

<style lang="scss">
    .win {
        position: absolute;
        background-color: white;
        border-radius: 10px;
        padding: 20px;
        border: 3px solid orange;
        box-shadow: 0px 0px 40px 0px rgba(black, 0.3);
        h1 {
            margin-bottom: 20px;
        }
    }

    cellgrid {
        display: flex;
        width: calc(150px * 4 + 30px);
        height: calc(150px * 4 + 30px);
        flex-wrap: wrap;
        gap: 10px;
        box-shadow: 0px 0px 10px 0px rgba(black, 0.2);
        padding: 10px;
        box-sizing: content-box;
    }

    cellgrid.won {
        background-color: #a1a9f5;
        transition: all 300ms ease-in-out;
    }
</style>
