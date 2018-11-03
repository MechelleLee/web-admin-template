<template>
  <section class="container">
    <dankal-card>
      <dankal-download
        :type="type"
        :href="href"
        :download="this.network().getDownloadFile"
      >
        <span class="download-button">DOWNLOAD</span>
      </dankal-download>
    </dankal-card>
    <dankal-card>
      <dankal-input
        v-model="input.value"
        mode="mobile"
        :length="input.length"
        :placeholder="input.placeholder"
        :validate="input.validate"
        @error="handleInputValidError"
      />
    </dankal-card>
    <dankal-card>
      <div>
        <h4>基于 label 实现复选框</h4>
      </div>
      <dankal-checkbox-group
        v-model="group"
        :limit="limit"
      >
        <div class="dankal-checkbox-layout-container">
          <div
            class="dankal-checkbox-layout-block"
            v-for="i in [1, 2, 3, 4, 5]"
            :key="i"
          >
            <dankal-checkbox
              v-for="(item, index) in source"
              :key="index"
              :label="item"
            >
              <template slot-scope="scope">
                <span
                  class="dankal-checkbox-container"
                  :class="{checked: scope.checked}"
                >{{ scope.data }}</span>
              </template>
            </dankal-checkbox>
          </div>
        </div>
      </dankal-checkbox-group>
    </dankal-card>
    <dankal-card :style="{width: '300px'}">
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
        <template slot-scope="scope">
          <div class="upload-block">
            <i class="el-icon-upload" />
            <span>文件上传</span>
          </div>
        </template>
      </dankal-upload>
    </dankal-card>
    <dankal-card :style="{width: '300px'}">
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
        <template slot-scope="scope">
          <div class="upload-block multiple">
            <i class="el-icon-upload" />
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
import DankalDownload from '@/components/download/dankal-download';

// API引入
import { getCloudsToken, getImageUpload, getDownloadFile } from '@/api/example';
import { MIME } from '@/jslib/variables';

import Validate from '@/jslib/validate';

export default {
  data() {
    return {
      href:
        'http://img.hb.aicdn.com/6c10143d78edcdd07fdc1af88de2629897e393b324ab4c-TuUb0h_fw658',
      type: MIME.jpg,
      input: {
        placeholder: '请输入您的邮箱',
        value: '',
        length: 10,
        validate: Validate.isEmail,
      },
      length: 10,
      group: [],
      limit: 10,
      accept: ['image/png', 'image/jpeg'],
      token: '',
      domain: '',
      images: [],
      source: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
      ],
    };
  },

  components: {
    DankalCard,
    DankalInput,
    DankalCheckbox,
    DankalCheckboxGroup,
    DankalUpload,
    DankalDownload,
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

    handleInputValidError(error) {
      console.log('====================================');
      console.log(error);
      console.log('====================================');
    },

    network() {
      const self = this;

      return {
        async getCloudsToken() {
          const { data } = await getCloudsToken();
          self.domain = data.url;
          self.token = data.token;
        },

        getDownloadFile(href) {
          return getDownloadFile(href);
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
  flex-direction: column;
}

.dankal-card {
  margin-bottom: 10px;
  margin-right: 10px;
}

.dankal-checkbox-layout-container {
  @include flex-container($justify-content: center);
}

.dankal-checkbox-layout-block {
  display: inline-block;
  max-width: 300px;
}

.dankal-checkbox-layout-block + .dankal-checkbox-layout-block {
  margin-left: 20px;
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

.dankal-download {
  text-align: right;
}

.download-button {
  @include button;
  text-align: right;
  padding: 10px 20px;
  border-radius: 2px;
}
</style>
