<template>
  <section
    class="container"
  >
    <dankal-card
      :style="{width: '300px'}"
    >
      <div>
        <h4>基于 label 实现复选框</h4>
      </div>
      <dankal-checkbox-group
        v-model="group"
        :limit="limit"
      >
        <dankal-checkbox
          v-for="(item, index) in [1, 2, 3, 4, 5, 6]"
          :key="index"
          :label="item"
        >
          <template
            slot-scope="scope"
          >
            <span
              class="dankal-checkbox-container"
              :class="{checked: scope.checked}"
            >{{ scope.data }}</span>
          </template>
        </dankal-checkbox>
      </dankal-checkbox-group>
    </dankal-card>
    <dankal-card
      :style="{width: '300px'}"
    >
      <dankal-upload
        v-model="images"
        :accept="accept"
        :upload="handleImageUpload"
        :handle="handleImageBuilds"
        @error="onFileUploadError"
      >
        <template
          slot="images"
          slot-scope="scope"
        >
          <img
            v-for="(item, index) in scope.files"
            :key="index"
            :src="item"
            class="upload-image"
          >
        </template>
        <template
          slot-scope="scope"
        >
          <div
            class="upload-block"
          >
            <i
              class="el-icon-upload"
            />
            <span>文件上传</span>
          </div>
        </template>
      </dankal-upload>
    </dankal-card>
    <dankal-card
      :style="{width: '300px'}"
    >
      <dankal-upload
        v-model="images"
        :accept="accept"
        :limit="5"
        :multiple="true"
        :compress="true"
        :upload="handleImageUpload"
        :handle="handleImageBuilds"
        @error="onFileUploadError"
      >
        <template
          slot="images"
          slot-scope="scope"
        >
          <img
            v-for="(item, index) in scope.files"
            :key="index"
            :src="item"
            class="upload-image"
          >
        </template>
        <template
          slot-scope="scope"
        >
          <div
            class="upload-block multiple"
          >
            <i
              class="el-icon-upload"
            />
          </div>
        </template>
      </dankal-upload>
    </dankal-card>
  </section>
</template>

<script>
// 组件引入
import DankalCard from '@/components/card/dankal-card';
import DankalInput from '@/components/input/dankal-input';
import DankalCheckbox from '@/components/checkbox/dankal-checkbox';
import DankalCheckboxGroup from '@/components/checkbox/dankal-checkbox-group';
import DankalUpload from '@/components/upload/dankal-upload';

// API引入
import { getCloudsToken, getImageUpload } from '@/api/example';

export default {
  data() {
    return {
      group: [],
      limit: 2,
      accept: ['image/png', 'image/jpeg'],
      token: '',
      domain: '',
      images: [],
    };
  },

  components: {
    DankalCard,
    DankalInput,
    DankalCheckbox,
    DankalCheckboxGroup,
    DankalUpload,
  },

  created() {
    this.network().getCloudsToken();
  },

  methods: {
    onFileUploadError(error) {
      console.log('====================================');
      console.log(error.type);
      console.log('====================================');
    },

    handleImageUpload(file) {
      const form = new FormData();

      form.append('token', this.token);
      form.append('file', file);

      return getImageUpload(form);
    },

    handleImageBuilds(res) {
      const { hash } = res.data;
      return `${this.domain}/${hash}`;
    },

    network() {
      const self = this;

      return {
        async getCloudsToken() {
          const { data } = await getCloudsToken();
          self.domain = data.url;
          self.token = data.token;
        },
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.dankal-card {
  margin-bottom: 10px;
  margin-right: 10px;
}

.dankal-checkbox-container {
  display: inline-block;

  width: 48px;
  height: 32px;
  background: rgba(249, 249, 249, 1);
  border: 1px solid rgba(210, 210, 210, 1);

  text-align: center;

  @include font($color: #000000, $line-height: 32px);

  transition: all 0.3s ease-in-out;
}

.dankal-checkbox-container.checked {
  background: rgba(217, 33, 40, 1);
  color: #ffffff;
  border: 1px solid rgba(217, 33, 40, 1);
}

.upload-block {
  @include flex-container($flex-direction: column);
  @include font($font-size: 12px, $color: #c0ccda);
  justify-content: center;

  width: 100%;
  height: 178px;
  background: rgba(255, 255, 255, 1);
  border-radius: 4px;
  border: 1px solid rgba(192, 204, 218, 1);

  i {
    font-size: 64px;
  }

  span {
    margin-top: 5px;
  }
}

.upload-image {
  height: 178px;
}
</style>
