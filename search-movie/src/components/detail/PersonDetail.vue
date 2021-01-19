<template>
  <div class="detail-person" v-if="detailData">
    사람 보여지는 곳
    <div class="person-info">
      <div class="profile">인물 사진 보여질 예정</div>
      <div class="contents">
        <div class="person-name">
          <h2>{{ selectedKoreanName() }}</h2>
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
              <strong>참여 작품 수 </strong>
              <span></span>
            </li>
            <li>
              <strong>성별</strong>
              <span>{{ detailData.gender === '1' ? '여성' : '남성' }}</span>
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
          <div class="works-movie">
            영화
          </div>
          <div class="works-tv">
            티비
          </div>
          <ListForm />
        </div>
      </div>
      <!-- {{ mainWorks(detailData.known_for_department) }} -->
      <!-- :slideWidth="slideWidth(mainWorks(personCreidts.crew).length)" -->
      {{ mainWorks() }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ListForm from '@/components/search/ListForm';
import { slideWidth } from '@/utils/style.js';

export default {
  data() {
    return {};
  },
  props: ['detailData'],
  created() {},

  components: {
    ListForm,
  },
  computed: {
    ...mapState(['personCreidts']),
  },
  methods: {
    selectedKoreanName() {
      let nameList = this.detailData.also_known_as;
      let koreanName = nameList.filter(el => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(el));

      return koreanName.join(' ');
    },
    mainWorks() {
      let works = [];
      const creditsDB = this.personCreidts;
      const job = this.detailData.known_for_department;

      if (job === 'Directing') {
        works = creditsDB.crew.filter(el => el.department === 'Directing');
      }
      let creditsObj = {
        tv: [],
        movie: [],
      };

      works.map(el => {
        return el.media_type === 'tv'
          ? creditsObj.tv.push(el)
          : creditsObj.movie.push(el);
      });

      for (let el in creditsObj) {
        // console.log(el);

        return creditsObj[el].sort((a, b) => {
          // console.log(
          //   a.first_air_date.split('-').join('') * 1,
          //   b.first_air_date.split('-').join('') * 1,
          // );
          if (el === 'tv') {
            return (
              b.first_air_date.split('-').join('') * 1 -
              a.first_air_date.split('-').join('') * 1
            );
          } else {
            return (
              b.release_date.split('-').join('') * 1 -
              a.release_date.split('-').join('') * 1
            );
          }
        });
      }

      console.log(creditsObj);
      // this.sortList(creditsObj);
      // return creditsObj;
    },

    // sortList(data) {
    //   console.log(data);
    // },
    slideWidth(length) {
      return slideWidth(length);
    },
  },
};
</script>

<style></style>
