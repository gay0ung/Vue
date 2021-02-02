<template>
  <div class="detail-info-wrap person" v-if="detailData">
    사람 보여지는 곳
    <div class="person-info">
      <div class="profile">인물 사진 보여질 예정</div>
      <div class="contents">
        <div class="person-name">
          <h2>{{ selectedKoreanName(this.detailData.also_known_as) }}</h2>
          <strong>{{ detailData.name }}</strong>
        </div>
        <div class="more-info">
          <h3>인물 정보</h3>
          <ul>
            <li>
              <strong>유명 분야</strong>
              <span>{{ detailData.known_for_department }}</span>
            </li>
            <li>
              <strong>성별</strong>
              <span>{{ detailData.gender === 1 ? '여성' : '남성' }}</span>
            </li>
            <li>
              <strong>생일</strong>
              <span>{{ detailData.birthday }}</span>
            </li>
            <li>
              <strong>출생지</strong>
              <span>{{ detailData.place_of_birth }}</span>
            </li>
          </ul>
        </div>
        <div class="main-works">
          <div class="works-movie" v-if="dataObj.movie.length > 0">
            영화
            <ListForm />
          </div>
          <div class="works-tv" v-if="dataObj.tv.length > 0">
            티비
          </div>
          <ListForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListForm from '@/components/search/ListForm';
// import { slideWidth } from '@/utils/style.js';

export default {
  data() {
    return {
      dataObj: {
        movie: [],
        tv: [],
      },
    };
  },
  props: ['detailData'],
  components: {
    ListForm,
  },
  computed: {
    ...mapState(['personCreidts']),
  },
  created() {
    this.mainWorks();
  },
  methods: {
    selectedKoreanName(nameList) {
      let koreanName = nameList.filter(el => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(el));

      return koreanName[0];
    },

    mainWorks() {
      const creditsDB = this.personCreidts;
      const job = this.detailData.known_for_department;
      let works = [];

      if (creditsDB.cast.length === 0) {
        works = creditsDB.crew.filter(el => el.department === job);
      }
      if (creditsDB.crew.length === 0) {
        works = creditsDB.cast.filter(el => el.department === job);
      }

      works = [...creditsDB.crew, ...creditsDB.cast].filter(
        el => el.department === job,
      );

      this.categoryOfWorks(works);
      return works;
    },

    categoryOfWorks(works) {
      let creditsObj = this.dataObj;

      works.map(el => {
        return el.media_type === 'tv'
          ? creditsObj.tv.push(el)
          : creditsObj.movie.push(el);
      });
      // this.sortOfWorks();
      return creditsObj;
    },

    sortOfWorks() {
      let creditsObj = this.dataObj;
      for (let type in creditsObj) {
        console.log(creditsObj[type]);
        // if (creditsObj[type].first_air_date) {
        //   // creditsObj[type].first_air_date.split('-').join('');
        //   // console.log(creditsObj[type].first_air_date.split('-').join(''));
        //   // creditsObj[type].sort((a,b)=>{
        //   //   a.first_air_date
        //   // })
        // }
        // creditsObj[tv].first_air_date
        // creditsObj[movie].release_date
      }
      // console.log(creditsObj);
    },

    // slideWidth(length) {
    //   return slideWidth(length);
    // },
  },
};
</script>

<style></style>
