<template>
    <label class="input-switch" :class="[ disabled && 'disabled', status ? 'on' : 'off' ]">
        <input type="checkbox" :disabled="disabled" :name="name" :id="name" :checked="status" value="true"
               @input="$emit('update:status', $event.target.checked == true)">
        <span class="toggle" :class="[ status && 'bg-' + variant ]"></span><span class="input-switch-label" v-html="label"></span>
    </label>
</template>

<script>
export default
{
    name: "EaInputSwitch",
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        name: String,
        label: String,
        disabled: Boolean,
        status: String|Number,
    }
}
</script>

<style lang="scss" scoped>
    .input-switch {
        position:relative;

        input {
            opacity: 0;
            width:0;
            height:0;
            position:absolute;
            left:0;
            top:0;
            pointer-events:none;

            &,
            &:after,
            &:before,
            & *,
            & *:after,
            & *:before,
            & + .toggle {
                box-sizing: border-box;
                &::selection {
                    background: none;
                }
            }

            + .toggle {
                outline: 0;
                display: inline-block;
                width: 4em;
                height: 2em;
                position: relative;
                cursor: pointer;
                user-select: none;
                background: #f0f0f0;
                border-radius: 2em;
                padding: 2px;
                transition: all .4s ease;
                vertical-align: middle;
                margin-right:.8em;

                &:after,
                &:before {
                    position: relative;
                    display: block;
                    content: "";
                    width: 50%;
                    height: 100%;
                }

                &:after {
                    left: 0;
                    border-radius: 50%;
                    background: #fff;
                    transition: all .2s ease;
                }

                &:before {
                    display: none;
                }
            }

            &:checked + .toggle {
                &:after {
                    left: 50%;
                }
            }
        }
    }
</style>
