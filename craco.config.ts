import { Configuration } from "webpack";
import {addAfterLoader, loaderByName} from "@craco/craco";

export default {
    webpack: {
        configure(webpackConfig: Configuration) {
            addAfterLoader(webpackConfig, loaderByName('babel-loader'), {
                test: /\.mdx?$/,
                use: ["babel-loader", require.resolve('@mdx-js/loader')],
            });
            return webpackConfig;
        }
    }
};