import slugify from 'slugify';
import unidecode from 'unidecode';
import _ from 'lodash';

/**
 * Options for the slugify function.
 * @typedef {Object} SlugifyOptions
 * @property {string} [replacement='-'] - The character to replace spaces with.
 * @property {string[]} [removeWords=[]] - An array of words to remove from the input text.
 * @property {boolean} [lower=true] - Whether to convert the text to lowercase.
 * @property {number} [maxLength=50] - The maximum length of the generated slug.
 */
interface SlugifyOptions {
    replacement?: string;
    removeWords?: string[];
    lower?: boolean;
    maxLength?: number;
}

/**
 * Generates a URL-friendly slug from the provided text.
 *
 * @param {string} text - The text to slugify.
 * @param {SlugifyOptions} [options] - The options to customize slug generation.
 * @returns {string} The generated slug.
 */
export function generateSlug(text: string,
                             options?: SlugifyOptions): string {
    const opts: SlugifyOptions = {
        replacement: '-',
        removeWords: [],
        lower: true,
        maxLength: 50, // Default maximum length of 50
        ...options,
    };

    // First, use unidecode to convert the text to ASCII, ensuring all characters are representable in URLs.
    let processedText = unidecode(text);

    // Remove undesired words if specified, ensuring opts.removeWords is defined.
    if (opts.removeWords && opts.removeWords.length > 0) {
        processedText = _.words(processedText)
            .filter(word => !opts.removeWords!.includes(word.toLowerCase()))
            .join(' ');
    }

    // Use slugify to convert the processed text to a slug, applying the specified options.
    let slug = slugify(processedText, { lower: opts.lower, strict: true, replacement: opts.replacement });

    // Enforce the maximum length if specified.
    if (opts.maxLength) {
        slug = slug.substring(0, opts.maxLength);
    }

    return slug;
}
