import '/scss/posts.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePostsSlider } from './components/posts/slider1.js';
import { useArticlesSlider } from './components/posts/slider2.js';

useTheme();
useBurger();
usePostsSlider();
useArticlesSlider();