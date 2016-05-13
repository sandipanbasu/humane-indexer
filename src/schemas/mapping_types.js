// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
export const $Keyword = {
    type: 'string',
    analyzer: 'humane_keyword_analyzer'
};

export const $VernacularKeyword = {
    type: 'string',
    analyzer: 'humane_keyword_analyzer'
};

export const $Long = {
    type: 'long'
};

export const $NotIndexedLong = {
    type: 'long',
    index: 'no',
    include_in_all: false
};

export const $Double = {
    type: 'double'
};

export const $NotIndexedDouble = {
    type: 'double',
    index: 'no',
    include_in_all: false
};

export const $Boolean = {
    type: 'boolean'
};

export const $NotIndexedBoolean = {
    type: 'boolean',
    index: 'no',
    include_in_all: false
};

export const $Date = {
    type: 'date',
    format: 'yyyy-MM-dd HH:mm:ss||epoch_millis'
};

export const $NotIndexedText = {
    type: 'string',
    index: 'no',
    include_in_all: false
};

export const $IdentityText = {
    type: 'string',
    index: 'not_analyzed'
};

export const $Text = {
    type: 'string',
    analyzer: 'humane_standard_analyzer',
    fields: {
        raw: $Keyword,

        humane: {
            type: 'string',
            analyzer: 'humane_text_analyzer'
        },
        shingle: {
            type: 'string',
            analyzer: 'humane_shingle_text_analyzer'
        }
    }
};

export const $VernacularText = {
    type: 'string',
    analyzer: 'humane_standard_analyzer',
    fields: {
        raw: $Keyword,
        vernacular: {
            type: 'string',
            analyzer: 'humane_vernacular_analyzer'
        }
    }
};