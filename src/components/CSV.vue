<template>
    <div style="color: rgb(62,62,62); background-color: white;">
        <div class="headgraph">
            <div style="margin: auto auto;">
                <div style=" font-size: 40px; padding-top: 60px;font-weight: 500;">
                    Technique-Controllable Singing Voice Synthesis(SVS)
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
                The scarcity of high-quality ©singing datasets significantly hinders the development of diverse singing
                tasks, like singing voice synthesis (SVS) and speech-to singing (STS) conversion. Existing open-source
                singing datasets are plagued by low quality, limited diversity of languages and singers, absence of
                multi-technique information and realistic music scores, and poor task suitability. To tackle these
                problems, we present GTSinger, a large Global, multi-Technique, free-to-use, high-quality singing corpus
                with realistic music scores, designed for all singing tasks, along with its benchmarks. Particularly,
                (1) we collect 80 hours of high quality singing voices; (2) 20 professional singers across six vocal
                ranges and nine languages offer diverse timbres and styles; (3) we provide controlled comparison and
                phoneme-level annotations of six singing techniques, helping technique recognition and control; (4)
                GTSinger includes realistic music scores, assisting real-world composition; (5) songs accompany manual
                phoneme-to-audio alignments, global style labels, and 20 hours of paired speech for various singing
                tasks. Moreover, to facilitate the use of GTSinger, we conduct four benchmark experiments:
                technique-controllable SVS, technique recognition, style transfer, and STS conversion. The corpus and
                demos can be found at http://gtsinger.github.io.
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Experimental Index
            </div>
            <div style="margin: 0 auto; width: 70%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; line-height: 40px;">
                Write Something Here...
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Demo
            </div>
            <div style="margin: 0 auto; width: 70%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; line-height: 40px;">
                Write Something Here...
            </div>
        </div>
    </div>
</template>

<script>
import IconList from './IconList.vue'
export default {
    data() {
        return {}
    },
    components: {
        IconList
    }
}
</script>