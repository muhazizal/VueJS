<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<router-link to="/" class="navbar-brand">Stock Trader</router-link>

			<div class="collapse navbar-collapse">
				<ul class="navbar-nav mr-auto">
					<router-link to="/portfolio" class="mr-3" active-class="active" tag="li">
						<a>Portfolio</a>
					</router-link>
					<router-link to="/stocks" active-class="active" tag="li">
						<a>Stocks</a>
					</router-link>
				</ul>
				<ul class="navbar-nav ml-auto">
					<li class="nav-item">
						<a class="nav-link" href="#" @click="endDay">End Day</a>
					</li>
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							>Save & Load</a
						>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a class="dropdown-item" href="#" @click="saveData">Save Data</a>
							<a class="dropdown-item" href="#" @click="loadData">Load Data</a>
						</div>
					</li>
					<li class="nav-item">
						<strong class="nav-link">Funds: {{ funds | currency }}</strong>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {
		funds() {
			return this.$store.getters.funds;
		},
	},

	methods: {
		...mapActions({
			randomizeStocks: 'randomizeStocks',
			fetchData: 'loadData',
		}),
		endDay() {
			this.randomizeStocks();
		},
		saveData() {
			const data = {
				funds: this.$store.getters.funds,
				stockPortfolio: this.$store.getters.stockPortfolio,
				stocks: this.$store.getters.stocks,
			};
			this.$http.put('data.json', data);
		},
		loadData() {
			this.fetchData();
		},
	},
};
</script>

<style></style>
