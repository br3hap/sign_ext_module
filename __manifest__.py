# -*- coding: utf-8 -*-
{
    'name': 'Sign Ext options',
    'version': '1.0',
    'summary': """ Módulo que extiende el módulo sign, agrega eventos en el wizard del firmante - odoo 18 """,
    'author': 'Breithner Aquituari',
    'website': '',
    'category': '',
    'depends': ['sign', 'web'],
    # 'data': [
        
    # ],

    'assets': {
        'web.assets_frontend': [
            'sign_ext_module/static/src/js/sign_patch.js',
        ],
    },
    
    'application': True,
    'installable': True,
    'auto_install': False,
    'license': 'LGPL-3',
}
