<template>
    <div class="s-pinyin">
        <div class="wordBox" v-for="(item,index) in list" :key="index">
            <ruby>{{item['汉字']}}
                <rt>{{item['拼音']}}</rt>
            </ruby>
        </div>
    </div>
</template>
<script>
    import {pinyinUtil} from './utils/pinyin_withtone.js'
 
    export default {
        name: "Pinyin",
        props: {
            content: String,
            withTone: {
                type: Boolean,
                default: true
            },
            firstLetter: {
                type: Boolean,
                default: false
            },
        },
        mounted() {
            for (let char of this.content) {
                let pinyin = ''
                // 判断是否为汉字
                var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
                if (reg.test(char)) {
                    if (this.firstLetter) {
                        // 获取汉字拼音的首字母（默认大写）   pinyinUtil.getFirstLetter(char)
                        pinyin = pinyinUtil.getFirstLetter(char)
                    } else {
                        // ​​​​​​​获取汉字的拼音（带声调） pinyinUtil.getPinyin(char, ' ', true)
                        // 获取汉字的拼音（无声调）  pinyinUtil.getPinyin(char, ' ', false)
                        pinyin = pinyinUtil.getPinyin(char, ' ', this.withTone)
                    }
                }
                this.list.push(
                    {
                        "汉字": char,
                        "拼音": pinyin
                    }
                )
            }
        },
        data() {
            return {
                list: []
            }
        }
    }
</script>
<style scoped>
    .s-pinyin {
        margin: 5px;
    }
 
    .wordBox {
        width: 25px;
        display: inline-block;
        text-align: center;
    }
</style>