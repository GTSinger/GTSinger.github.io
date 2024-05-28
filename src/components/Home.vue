<template>
    <div id="home" style="color: rgb(62,62,62); background-color: white;">
        <!-- Head Graph -->
        <div class="headgraph">
            <div style="margin: auto auto;">
                <div style=" font-size: 40px; padding-top: 60px;font-weight: 500;">
                    GTSinger: A Global Multi-Technique Singing Corpus<br />
                    with Realistic Music Scores for All Singing Tasks
                </div>
                <div style="margin: 40px auto; width:50%; font-size: 20px;word-wrap:break-word;
word-break:normal; text-align:left; ">
                    We introduce <span style="font-weight: bold;">GTSinger</span>, a large <span
                        style="font-weight: bold;">G</span>lobal, multi-<span
                        style="font-weight: bold;">T</span>echnique, free-to-use, high-quality singing corpus
                    with realistic music scores, designed for all singing tasks, along with its benchmarks.
                </div>
                <IconList />
            </div>
        </div>
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Abstract
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
        
        <div
            style="min-height: 300px;padding-top: 20px; min-width: 80% ; background-color: white;text-align: center;display: flex; ">
            <div style="width: 70%; margin:0 auto; display: flex;flex-wrap: wrap; justify-content: center;">
                <img src="../assets/fig1.png" style="float: left; width: 40%; min-width: 400px; object-fit: contain;" />
                <span style="width:5%"></span>
                <img src="../assets/tbl1.png" style="float: left; width: 50%; min-width: 400px; object-fit: contain;" />
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; text-align: center; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; padding-bottom: 15px; margin: 0 auto; text-align: left;">
                Index
            </div>
            <div
                style="background-color: rgb(241,245,248); width: 70%; margin: 0 auto; border-radius: 10px; text-align: center;">
                <div style="padding-top: 10px;">
                    <h2>Dataset</h2>
                    <p>Here is the brief intro of the index.</p>
                    <a @click="this.To('/dataset')">And here is the link.</a>
                </div>
                <div style="padding-top: 10px;">
                    <h2>Technique-Controllable Singing Voice Synthesis(SVS)</h2>
                    <p>Here is the brief intro of the index.</p>
                    <a @click="this.To('/csv')">And here is the link.</a>
                </div>
                <div style="padding-top: 10px;">
                    <h2>Technique Recognition</h2>
                    <p>Here is the brief intro of the index.</p>
                    <a @click="this.To('/tr')">And here is the link.</a>
                </div>
                <div style="padding-top: 10px;">
                    <h2>Style Transfer</h2>
                    <p>Here is the brief intro of the index.</p>
                    <a @click="this.To('/st')">And here is the link.</a>
                </div>
                <div style="padding-top: 10px;">
                    <h2>STS Conversion</h2>
                    <p>Here is the brief intro of the index.</p>
                    <a @click="this.To('/sts')">And here is the link.</a>
                </div>
            </div>
        </div>
        <el-divider />
        <div style="min-height: 300px; background-color: white; color: black;">
            <div
                style="width: 70%; font-size: 35px; font-weight: bold; padding-top:15px; margin: 0 auto; text-align: left;">
                Citation
            </div>
            <div style="width:70%; margin: 0 auto; padding: 20px 0">If you find our work useful, please cite our paper.
                Click <a @click="this.CopySite()"> HERE</a> to copy to your clipboard.
            </div>
            <div id="citation-text"
                style="background-color: rgb(248,245,236); width: 70%; margin: 0 auto; border-radius: 10px; text-align: left; overflow-x: auto; word-wrap: unset; ">
                @inproceedings{<br />
                    zhang2022msinger,<br />
                    title={M4Singer: A Multi-Style, Multi-Singer and Musical Score Provided Mandarin Singing Corpus},<br />
                    author={Lichao Zhang and Ruiqi Li and Shoutong Wang and Liqun Deng and Jinglin Liu and Yi Ren and
                Jinzheng He and Rongjie Huang and Jieming Zhu and Xiao Chen and Zhou Zhao},<br />
                booktitle={Thirty-sixth Conference on Neural Information Processing Systems Datasets and Benchmarks
                Track},<br />
                year={2022},<br />
                }
            </div>
            <div style="height: 80px;" />
        </div>


    </div>
</template>

<script>
import { ElMessage } from 'element-plus';
import IconList from './IconList.vue'
export default {
    data() { return {} },
    components: {
      IconList  
    },
    methods: {
        To(route) {
            let e = document.getElementById('home')
            e.scrollTop = 0
            this.$router.push(route)
        },
        CopySite() {
            var text = document.getElementById('citation-text').innerText
            var textArea = document.createElement("textarea")
            textArea.value = text
            document.body.appendChild(textArea)
            textArea.select()
            document.execCommand("copy")
            document.body.removeChild(textArea)
            ElMessage.success("Copied")
        }
    }
}
</script>

<style>
.headgraph {
    background: url("../assets/head_bgd.jpg") no-repeat;
    background-size: cover;
    text-align: center;
}

.icon {
    height: 30px;
    width: 30px;
}
</style>