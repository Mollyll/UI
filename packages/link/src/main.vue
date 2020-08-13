<template>
    <a 
    	class="m__link"
    	:class="['m__link--' + type,
    	underline ? (disabled ? '' : 'is-underline') : '', 
    	disabled ? 'is-disabled' : ''
    	]"
    >
    	<span class="m_link--inner">
    		<slot></slot>
    	</span>
    </a>
</template>
<script>
export default {
    name: "MLink",
    props: {
        type: {
        	type: String,
        	default: "default"
        },
        underline: {
        	type: Boolean,
        	default: true
        },
        disabled: {
        	type: Boolean,
        	defautl: false
        }
    }
}
</script>