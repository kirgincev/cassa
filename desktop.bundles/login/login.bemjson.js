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
    mods: { theme: 'kirgintcev'},
    mix: {
        block: 'theme',
        mods: { color: 'kirgintcev', space: 'default', size: 'default', gap: 'small', menu: 'default', breakpoint: 'default', font: 'ibm'}
    },

    content: [{
        block: 'pt-form',
        mods: { border: 'all', shadow: 'cloud'},
        mix: { block: 'decorator', mods: { 'space-a': 'xl' } },
        content: [{
                elem: 'item',
                elemMods: {},
                content: [{
                    block: 'text',
                    mods: { size: 'xxl',type:'h1', weight:'bold'},
                    content: 'Подключение'
                }]
            },
            {
                elem: 'pt-form',
                content: [

                    {
                        elem: 'item',
                        elemMods: {  border: 'bottom' },
                        content: [{
                                elem: 'item',
                                elemMods: { 'space-b': 'm', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Страна Регистрации'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'kirgintcev', size: 'm', width: 'available' },
                                            placeholder : 'Россия'

                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: {  'space-b': 'm', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Имя Организации или ИНН'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'kirgintcev', size: 'm', width: 'available' }
                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: {  'space-b': 'xxxl', distribute: 'default', 'vertical-align': 'center' },
                                content: [{
                                        elem: 'label',
                                        mix: { block: 'text', mods: { size: 'm', view: 'primary' } },
                                        content: 'Телефон'
                                    },
                                    {
                                        elem: 'control',
                                        content: {
                                            block: 'input',
                                            mods: { theme: 'kirgintcev', size: 'm', width: 'available' }

                                        }
                                    }
                                ]
                            },
                            {
                                elem: 'item',
                                elemMods: { border: 'bottom', distribute: 'right' },
                                content: [
                                    {
                                        block: 'button',
                                        mods: { theme: 'kirgintcev', size: 'xxl', view: 'action' },
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
