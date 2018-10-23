import Vue from 'vue';
import { ImageDomain } from '../configs/env';

Vue.filter('imgMapper', value => ImageDomain + value);
