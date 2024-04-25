<template>
	<div class="child">
		<h3>子组件</h3>
		<GrandChild v-bind="$attrs"/>
	</div>
</template>

<script setup lang="ts" name="Child">
	import GrandChild from './GrandChild.vue'
	// $attrs 包含了父组件传递给子组件的除了props之外的所有属性
	// 子组件可以直接使用$attrs来获取父组件传递的属性
	// 子组件也可以通过v-bind="$attrs"将$attrs传递给孙子组件
	// 孙子组件也可以通过v-bind="$attrs"将$attrs传递给曾孙组件
	// 以此类推，直到最底层的组件
</script>

<style scoped>
	.child{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0 0 10px black;
	}
</style>