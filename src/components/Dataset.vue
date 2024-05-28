<template>
    <div style="color: rgb(62,62,62); background-color: white;">
        <div class="headgraph">
            <div style="margin: auto auto;">
                <div style=" font-size: 40px; padding-top: 60px;font-weight: 500;">
                    Dataset & Demo
                </div>
                <IconList />
            </div>
        </div>
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Introduction
            </div>
            <div style="margin: 0 auto; width: 70%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; line-height: 40px;">
                Here is the introduction of dataset.
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Demo
                <el-select v-model="this.chosen" placeholder="Language" size="large"
                    style="width: 180px;margin-left: 30px;">
                    <el-option v-for="item, i in this.demos" :key="i" :label="item.language" :value="i" />
                </el-select>
            </div>
            <div
                style="background-color: rgb(241,245,248); width: 70%; margin: 0 auto; border-radius: 10px; text-align: left;">
                <div style="font-size: 20px; padding-top: 20px;margin-left: 30px;"> Language: {{ this.demos[chosen].language }} </div>

                <div style="font-size: 18px; padding-top: 10px;margin-left: 30px;">
                    Info: 
                    {{ this.demos[chosen].singer }}, <span style="font-style: italic;">{{ this.demos[chosen].song
                        }}</span>,
                    {{ this.demos[chosen].emotion }}, {{ this.demos[chosen].method }}
                </div>
                <div style="font-size: 18px; padding-top: 10px;margin-left: 30px;">
                    Text: 
                    <Pinyin v-if="this.demos[chosen].language=='Chinese'" :content="this.demos[chosen].text" style="display: inline-block;" />
                    <span v-else style="font-style: italic;">{{ this.demos[chosen].text }}</span>
                </div>

                <div style="padding-top: 30px; padding-bottom: 30px;">
                    <div v-if="this.demos[chosen].language == 'Chinese'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'English'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'German'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'Russian'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'French'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'Italian'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'Spanish'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'Japanese'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                    <div v-else-if="this.demos[chosen].language == 'Korean'">
                        <div v-for="demo in this.demos[chosen].wav" class="demo">
                            {{ demo.intro }}<br />
                            <audio controls controlsList="nodownload noplaybackrate">
                                <source :src="demo.src">
                            </audio>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                PipeLine
            </div>
            <img src="../assets/pipeline.png" style=" width: 70%; min-width: 400px; object-fit: contain;" />
            <div style="margin: 0 auto; width: 70%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; line-height: 40px;">
                Here is the introduction of the pipeline.
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Statistics
            </div>
            <div style="margin: 0 auto; width: 70%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; line-height: 40px;">
                Not Implemented.
            </div>
        </div>
    </div>
</template>

<script>
import IconList from './IconList.vue'
import Pinyin from './Pinyin.vue'
import wav_sc_01 from './demos/0000.wav'
import wav_sc_02 from './demos/0001.wav'
import wav_en_01 from './demos/0002.wav'
import wav_en_02 from './demos/0003.wav'
import wav_en_03 from './demos/0004.wav'
export default {
    data() {
        return {
            chosen: 0,
            demos: [
                {
                    'language': 'Chinese',
                    'singer': 'Jay Zhou',
                    'song': 'Listen To Mom',
                    'emotion': 'Gentle',
                    'method': 'unknown',
                    'text': '听妈妈的话，别让她受伤',
                    'wav': [{
                        'intro': 'Origin',
                        'src': wav_sc_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_sc_02
                    }
                    ]
                },
                {
                    'language': 'English',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'See you make your way through the crowd',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                },
                {
                    'language': 'German',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                },
                {
                    'language': 'Russian',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                },
                {
                    'language': 'French',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                }, {
                    'language': 'Spanish',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                }, {
                    'language': 'Italian',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                },
                {
                    'language': 'Japanese',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                },
                {
                    'language': 'Korean',
                    'singer': 'Taylor Swift',
                    'song': 'Love Story',
                    'emotion': 'Affectionate',
                    'method': 'unknown',
                    'text': 'unknown',
                    'wav': [{
                        'intro': 'En',
                        'src': wav_en_01
                    }, {
                        'intro': 'Mix',
                        'src': wav_en_02
                    }, {
                        'intro': 'Control',
                        'src': wav_en_03
                    }
                    ]
                }
            ]
        }
    },
    components: {
        IconList,
        Pinyin
    }
}
</script>

<style>
.demo {
    font-size: 16px;
    background-color: white;
    border-radius: 20px;
    width: 280px;
    display: inline-block;
    margin-left: 20px;
    text-align: center;
}
.demo audio{
    width: 260px; margin: 0 auto;
}
</style>