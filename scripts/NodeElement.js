/** Class get node element by className end some manipulations */
class NodeElement {
    /**
     * get class name for search element
     * @param {string} {className}
     */
    constructor({ className }) {
        this.className = className;
        this.$el = this.getEl(this.className);
    }

    /**
     * get node element by className
     * @param {string} {className}
     * @return {(HTMLElement|Array)} depends on how many elements it finds
     */
    getEl(className) {
        const $thing = [...document.querySelectorAll(`.${className}`)];

        if (!$thing.length) {
            console.warn(`don't find el by className ${className}`);
            return;
        } else if ($thing.length === 1) {
            return $thing[0];
        } else {
            return $thing;
        }
    }

    /**
     * get children element by bem
     * @param {string} childClassName
     * @return {(HTMLElement|Array)} depends on how many elements it finds
     */
    bem(childClassName) {
        return this.getEl(`${this.className}__${childClassName}`);
    }

    /**
     * method for manipulations with className
     * @param {Array} list
     * @param {string} className
     * @param {string} action (click, remove ...etc)
     */
    actionClass(list, className, action) {
        [...list].forEach(item => item.classList[action](className));
    }

    /**
     * remove className
     * @param {Array} list
     * @param {string} className
     */
    removeClasses(list, className) {
        this.actionClass(list, className, 'remove');
    }

    /**
     * add className
     * @param {Array} list
     * @param {string} className
     */
    addClasses(list, className) {
        this.actionClass(list, className, 'add');
    }

    /**
     * toggle className
     * @param {Array} list
     * @param {string} className
     */
    toggleClasses(list, className) {
        this.actionClass(list, className, 'toggle');
    }

    /**
     * methods for click
     * @param {requestCallback} callback
     */
    click(callback) {
        this.$el.addEventListener('click', e => {
            e.preventDefault;

            callback();
        });
    }
}

export default NodeElement;
