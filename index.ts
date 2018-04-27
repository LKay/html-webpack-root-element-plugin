import { Compiler, compilation } from "webpack";
import { Options as HtmlWebpackOptions } from "html-webpack-plugin";
import { Tapable } from "tapable";

declare namespace HtmlWebpackRootElementPlugin {
    interface RootElementConfig {
        tagName?: string;
        idAttribute?: string;
    }

    interface Options {
        rootElement: boolean | string | RootElementConfig;
    }
}

type Options = HtmlWebpackRootElementPlugin.Options & HtmlWebpackOptions;

const defaultRootOptions: HtmlWebpackRootElementPlugin.RootElementConfig = {
    tagName     : "div",
    idAttribute : "root"
};

const PluginName = "HtmlWebpackRootElementPlugin";

class HtmlWebpackRootElementPlugin implements Tapable.Plugin {


    constructor() {
        if (arguments.length > 0) {
            throw new TypeError(`The ${PluginName} does not accept any options`);
        }
    }

    apply(compiler: Compiler) {
        compiler.hooks.compilation.tap(
            PluginName,
            (compilation: compilation.Compilation) => {
                (compilation.hooks as any).htmlWebpackPluginAlterAssetTags.tap(
                    PluginName,
                    (data) => typeof data.then === "function"
                        ? data.then(this.processRootElement)
                        : this.processRootElement
                );
            }
        );
    }

    processRootElement(htmlPluginData) {
        const options: Options = Object.assign(
            { rootElement: true },
            htmlPluginData.plugin.options
        );

        if (options.rootElement === false) {
            return htmlPluginData;
        }

        const rootElementOptions = Object.assign(
            {},
            defaultRootOptions,
            typeof options.rootElement === "string"
                ? { idAttribute : options.rootElement || defaultRootOptions.idAttribute }
                : options.rootElement
        );

        return Object.assign({}, htmlPluginData, {
            body : [{
                attributes : { id : rootElementOptions.idAttribute },
                closeTag   : true,
                tagName    : rootElementOptions.tagName
            }].concat(htmlPluginData.body)
        });
    }
}

export = HtmlWebpackRootElementPlugin;
