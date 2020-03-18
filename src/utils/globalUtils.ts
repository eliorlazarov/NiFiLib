import * as util from "util";

export class GlobalUtils {

    public static replaceAll(text: string, search: string, replacement: string): string {
        if (typeof text === "string") {
            while (text.indexOf(search) !== -1) {
                text = text.replace(search, replacement);
            }
        }

        return text;
    }

    public static cleanSurroundingSlashes(text: string): string {
        if (text[0] == '/') {
            text = text.substr(1, text.length);
        }

        if (text[text.length - 1] == "/") {
            text = text.substr(0, text.length - 1);
        }

        return text;
    }

    public static parseBoolean(object: any, def: boolean = true): boolean {
        if (util.isNullOrUndefined(object)) {
            return def;
        } else {
            try {
                return JSON.parse(object);
            } catch (e) {
                return def;
            }
        }
    }

    public static parseBooleanDefFalse(object: any, def: boolean = false): boolean {
        if (util.isNullOrUndefined(object)) {
            return def;
        } else {
            try {
                return JSON.parse(object);
            } catch (e) {
                return def;
            }
        }
    }

    public static regexEscape(s: string) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    public static async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}