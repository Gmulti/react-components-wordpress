module.exports = api => {
    api.cache(true)
    return {
        presets: [
            [
                '@babel/preset-env',
                { shippedProposals: true, useBuiltIns: 'usage' }
            ],
            '@babel/preset-react'
        ],
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            [
                '@babel/plugin-proposal-object-rest-spread',
                { loose: true, useBuiltIns: true }
            ],
            ['@babel/plugin-proposal-class-properties', { loose: true }]
        ]
    }
}
