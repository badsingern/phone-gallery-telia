import { shallowMount } from '@vue/test-utils';
import ContentItem from "@/components/ContentItem";

describe('ContentItem', () => {
  const testData =  {
    contentItem: {
      displayName: 'You',
      displayImageUrl: 'imageUrl'
    }
  };

  const wrapper = shallowMount(ContentItem, {
    data() {
      return testData;
    }
  });

  it('renders item title', () => {
    expect(wrapper.find('h3').text()).toEqual(testData.contentItem.displayName);
  });

  it('renders item image', () => {
    expect(wrapper.find('img').attributes('src')).toBe(testData.contentItem.displayImageUrl);
  });
})
