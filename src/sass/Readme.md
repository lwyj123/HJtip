备注： sass文件中带_的文件不会被编译成css文件（例： _base.scss）

base/_base
基础的ui: reset header header_nav header_search footer form table layout ...

config/_config

config 核心层 比如一些基本的variables mixin media animate grid …

mod/_mod

mod 模块 比如分页 分步导航 哪个模块用到在导入 比如 index.scss 用到了分页 就导入

pub/_pub
pub 一些公共的