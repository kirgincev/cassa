module.exports = {
    block: 'page',
    title: 'Hello page',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'login.min.css' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'login.min.js' }],
    mods: { theme: 'islands' },
    mix: {
        block: 'theme',
        mods: { color: 'kirgintcev', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm' }
    },
    content: [{
        block: 'pt-form',
        mods: { border: 'all', shadow: 'cloud' },
        content: [{
                elem: 'item',
                elemMods: { 'space-v': 'm', 'space-h': 'l', border: 'bottom' },
                content: [{
                    block: 'text',
                    mods: { size: 'xxl', view: 'primary' },
                    content: 'Подключение'
                }]
            },
            {
                elem: 'pt-form',
                content: [

                    {
                        elem: 'item',
                        elemMods: { 'space-v': 'xs', 'space-h': 'l', border: 'bottom' },
                        content: [{
                                elem: 'item',
                                elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Страна Регистрации'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'islands', size: 'm', width: 'available' }
                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Имя Организации или ИНН'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'islands', size: 'm', width: 'available' }
                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'space-v': 'xs', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Телефон'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'islands', size: 'm', width: 'available' }
                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: { 'space-v': 'm', 'space-h': 'l', border: 'bottom', distribute: 'between' },
                                content: [{
                                        block: 'button',
                                        mods: { theme: 'islands', size: 'm', type: 'link' },
                                        text: ' '
                                    },
                                    {
                                        block: 'button',
                                        mods: { theme: 'islands', size: 'm', view: 'action' },
                                        text: 'Продолжить'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }]
};