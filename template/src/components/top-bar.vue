<template>
<div class="header_container">
	<div class="router_view" >
			<el-breadcrumb separator-class="el-icon-arrow-right" separator=">">
				<el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index"><span  @click="changeRouter(item.url)"> {{item.name}}</span></el-breadcrumb-item>
			</el-breadcrumb>
	</div>
	<div class="filter_view">
		<slot name="filter"></slot>
	</div>
</div>
</template>

<script>

  export default {
		data(){
			return {

			}
		},
		created(){
		},
		computed: {
		},
		methods: {
			changeRouter(url){
			  console.log(url)
				this.$router.push({path:url})
			}
		}
  }
</script>

<style lang="scss">
	.header_container{
		height: 73px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 20px;
		background-color: #fff;
		margin: 0;
		.search_row{
			width: 100%;
		}
		.router_view{

		}
		.filter_view{
			display: flex;
			padding-right: 25px;
			align-items: center;
			.type{
				margin: 0 10px;
				color: #223040;
				background: rgba(0,0,0,0);
				margin: 0 15px;
			}
		}
	}

	.top-search-input{
		width: 220px;
		margin: 0 10px;
		.search_icon{
			width: 36px!important;
			height: 36px!important;
			padding: 10px 11px!important;
		}
		.search_row{
			margin-bottom: 30px;
		}
	}








</style>
