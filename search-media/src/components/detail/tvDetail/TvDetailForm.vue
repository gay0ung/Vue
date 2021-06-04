<template>
  <DetailTemp :mType="'tv'">
    <template #tv>
      <div class="seasons__wrap" v-if="detailDB">
        <h3>시리즈</h3>
        <div class="current_season">
          <div class="last__episode">
            <div
              class="last__image"
              :style="{
                backgroundImage: `url(${detailDB.last_episode_to_air.still_path})`,
              }"
            ></div>
            <div class="last__episode__info">
              <h4>시즌 {{ detailDB.last_episode_to_air.season_number }}</h4>
              <div class="">
                <strong>최근 방송</strong>
                <p>
                  <span
                    >{{ detailDB.last_episode_to_air.episode_number }}.
                  </span>
                  {{ detailDB.last_episode_to_air.overview }}
                </p>
              </div>
            </div>
          </div>
          {{ detailDB.last_episode_to_air }}
        </div>
        <ListForm
          :data="detailDB.seasons"
          :type="'seasons'"
          :mType="'tv'"
          :title="''"
        ></ListForm>
        {{ detailDB.seasons }}
      </div>
    </template>
  </DetailTemp>
</template>

<script>
import { mapState } from 'vuex';
import ListForm from '../../common/list/ListForm.vue';
import DetailTemp from '../DetailTemp.vue';
import { checkImages } from '../../../utils/imageCheck.js';
export default {
  components: { DetailTemp, ListForm },
  computed: {
    ...mapState(['detailDB']),
  },
  methods: {
    checkImages(path) {
      checkImages(path);
    },
  },
};
</script>

<style>
@import './tvDetailStyle.scss';
</style>
