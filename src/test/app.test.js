import {shallowMount} from '@vue/test-utils';
import ContentItem from "@/components/ContentItem";


describe('ContentItem', () => {
    it('renders message', () => {
        const wrapper = shallowMount(ContentItem, {
            data() {
                return {
                    contentItem: {
                        displayName: 'You'
                    }
                }
            }
        });

        expect(wrapper.find('h3').text()).toEqual('You');
    });
})
