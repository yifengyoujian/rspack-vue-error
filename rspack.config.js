const { VueLoaderPlugin } = require('vue-rsloader')

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
    context: __dirname,
	resolve: {
		alias: {
			"@": "./src"
		}
	},
    entry: {
		main: "./src/main.ts"
	},
    builtins: {
		html: [
			{
				template: "./index.html"
			}
		],
		define: {
			__VUE_OPTIONS_API__: JSON.stringify(false),
			__VUE_PROD_DEVTOOLS__: false
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-rsloader',
                    }
                ]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'less-loader',
						options: {
							// ...
						},
					},
				],
				type: 'css'
			},
		]
	},
    plugins: [
        new VueLoaderPlugin()
    ]
}