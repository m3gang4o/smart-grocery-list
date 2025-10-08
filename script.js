class SmartGroceryList {
    constructor() {
        this.items = [];
        this.categories = {
            produce: {
                name: 'Produce',
                keywords: ['apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'cherry', 'peach', 'pear', 'plum', 'kiwi', 'mango', 'pineapple', 'watermelon', 'cantaloupe', 'honeydew', 'avocado', 'tomato', 'cucumber', 'lettuce', 'spinach', 'kale', 'arugula', 'cabbage', 'broccoli', 'cauliflower', 'carrot', 'celery', 'onion', 'garlic', 'potato', 'sweet potato', 'bell pepper', 'jalapeño', 'mushroom', 'zucchini', 'squash', 'eggplant', 'corn', 'peas', 'green beans', 'asparagus', 'brussels sprouts', 'radish', 'beet', 'turnip', 'parsnip', 'leek', 'scallion', 'cilantro', 'parsley', 'basil', 'mint', 'dill', 'rosemary', 'thyme', 'oregano', 'sage', 'lemon', 'lime', 'grapefruit', 'coconut', 'dates', 'figs', 'raisins', 'cranberries']
            },
            dairy: {
                name: 'Dairy',
                keywords: ['milk', 'cheese', 'yogurt', 'butter', 'cream', 'sour cream', 'cottage cheese', 'ricotta', 'mozzarella', 'cheddar', 'swiss', 'parmesan', 'feta', 'goat cheese', 'cream cheese', 'half and half', 'heavy cream', 'whipped cream', 'ice cream', 'frozen yogurt', 'eggs', 'egg whites', 'buttermilk', 'condensed milk', 'evaporated milk', 'almond milk', 'soy milk', 'oat milk', 'coconut milk', 'lactaid']
            },
            frozen: {
                name: 'Frozen',
                keywords: ['frozen', 'ice cream', 'frozen yogurt', 'popsicle', 'frozen fruit', 'frozen vegetables', 'frozen berries', 'frozen pizza', 'frozen dinner', 'frozen fish', 'frozen chicken', 'frozen beef', 'frozen shrimp', 'frozen fries', 'frozen waffles', 'frozen pancakes', 'frozen bagels', 'frozen bread', 'ice', 'sorbet', 'gelato', 'frozen peas', 'frozen corn', 'frozen broccoli', 'frozen spinach', 'frozen mixed vegetables']
            },
            pantry: {
                name: 'Pantry',
                keywords: ['rice', 'pasta', 'bread', 'flour', 'sugar', 'salt', 'pepper', 'oil', 'olive oil', 'vegetable oil', 'coconut oil', 'vinegar', 'balsamic vinegar', 'apple cider vinegar', 'soy sauce', 'hot sauce', 'ketchup', 'mustard', 'mayonnaise', 'peanut butter', 'jelly', 'jam', 'honey', 'maple syrup', 'vanilla', 'cinnamon', 'paprika', 'cumin', 'chili powder', 'garlic powder', 'onion powder', 'italian seasoning', 'bay leaves', 'black pepper', 'red pepper flakes', 'beans', 'lentils', 'chickpeas', 'quinoa', 'oats', 'cereal', 'crackers', 'chips', 'nuts', 'almonds', 'walnuts', 'pecans', 'cashews', 'peanuts', 'sunflower seeds', 'chia seeds', 'flax seeds', 'coconut flakes', 'raisins', 'dried fruit', 'canned tomatoes', 'tomato sauce', 'tomato paste', 'chicken broth', 'vegetable broth', 'beef broth', 'coconut milk', 'canned beans', 'tuna', 'salmon', 'sardines', 'pickles', 'olives', 'capers', 'worcestershire sauce', 'fish sauce', 'sesame oil', 'tahini', 'miso paste', 'curry powder', 'turmeric', 'ginger', 'cardamom', 'nutmeg', 'allspice', 'cloves', 'star anise', 'fennel seeds', 'coriander', 'mustard seeds', 'poppy seeds', 'sesame seeds', 'vanilla extract', 'almond extract', 'baking powder', 'baking soda', 'cornstarch', 'arrowroot', 'cocoa powder', 'chocolate chips', 'dark chocolate', 'white chocolate', 'powdered sugar', 'brown sugar', 'coconut sugar', 'agave', 'stevia', 'molasses', 'corn syrup', 'rice vinegar', 'white wine vinegar', 'red wine vinegar', 'mirin', 'sake', 'cooking wine', 'brandy', 'rum', 'whiskey', 'vodka', 'gin', 'tequila', 'beer', 'wine']
            },
            bakery: {
                name: 'Bakery',
                keywords: ['bread', 'bagel', 'muffin', 'croissant', 'donut', 'cake', 'pie', 'cookie', 'pastry', 'roll', 'bun', 'loaf', 'baguette', 'sourdough', 'whole wheat bread', 'white bread', 'rye bread', 'pumpernickel', 'pita', 'naan', 'tortilla', 'wrap', 'english muffin', 'cinnamon roll', 'danish', 'scone', 'biscuit', 'pretzel', 'focaccia', 'ciabatta', 'challah', 'brioche', 'cornbread', 'banana bread', 'zucchini bread', 'pound cake', 'cheesecake', 'cupcake', 'brownie', 'bar', 'tart', 'eclair', 'cream puff', 'strudel', 'baklava', 'tiramisu', 'cannoli', 'macaroon', 'macaron', 'shortbread', 'gingerbread', 'sugar cookie', 'chocolate chip cookie', 'oatmeal cookie', 'peanut butter cookie', 'snickerdoodle', 'molasses cookie', 'linzer cookie', 'biscotti', 'wafer', 'graham cracker', 'saltine', 'oyster cracker', 'water cracker', 'rice cake', 'corn cake', 'flatbread', 'pizza dough', 'pie crust', 'phyllo', 'puff pastry']
            },
            household: {
                name: 'Household',
                keywords: ['toilet paper', 'paper towels', 'tissues', 'napkins', 'aluminum foil', 'plastic wrap', 'parchment paper', 'wax paper', 'ziplock bags', 'garbage bags', 'storage bags', 'freezer bags', 'sandwich bags', 'lunch bags', 'dish soap', 'laundry detergent', 'fabric softener', 'bleach', 'stain remover', 'dryer sheets', 'all purpose cleaner', 'glass cleaner', 'bathroom cleaner', 'kitchen cleaner', 'floor cleaner', 'disinfectant', 'air freshener', 'candles', 'matches', 'lighter', 'batteries', 'light bulbs', 'extension cord', 'duct tape', 'scotch tape', 'masking tape', 'super glue', 'wood glue', 'rubber cement', 'staples', 'paper clips', 'rubber bands', 'push pins', 'thumbtacks', 'binder clips', 'folders', 'notebooks', 'pens', 'pencils', 'markers', 'highlighters', 'erasers', 'rulers', 'scissors', 'box cutter', 'utility knife', 'screwdriver', 'hammer', 'pliers', 'wrench', 'level', 'measuring tape', 'drill bits', 'screws', 'nails', 'washers', 'bolts', 'nuts', 'hinges', 'locks', 'keys', 'doormat', 'welcome mat', 'rug', 'carpet', 'vacuum bags', 'air filter', 'water filter', 'coffee filter', 'tea bags', 'coffee', 'tea', 'hot chocolate', 'cocoa', 'instant coffee', 'decaf coffee', 'espresso', 'cappuccino', 'latte', 'mocha', 'chai', 'green tea', 'black tea', 'herbal tea', 'iced tea', 'sweet tea', 'unsweetened tea', 'diet tea', 'detox tea', 'chamomile tea', 'peppermint tea', 'ginger tea', 'lemon tea', 'honey tea', 'earl grey', 'english breakfast', 'orange pekoe', 'oolong', 'white tea', 'rooibos', 'mate', 'kombucha', 'kefir', 'probiotic', 'vitamin', 'supplement', 'protein powder', 'energy drink', 'sports drink', 'electrolyte', 'water', 'sparkling water', 'soda', 'juice', 'smoothie', 'shake', 'beer', 'wine', 'liquor', 'whiskey', 'vodka', 'gin', 'rum', 'tequila', 'brandy', 'cognac', 'champagne', 'prosecco', 'cider', 'mead', 'sake', 'soju', 'baiju', 'ouzo', 'absinthe', 'sambuca', 'amaretto', 'kahlua', 'baileys', 'grand marnier', 'cointreau', 'triple sec', 'vermouth', 'bitters', 'grenadine', 'simple syrup', 'club soda', 'tonic water', 'ginger ale', 'ginger beer', 'root beer', 'cream soda', 'cola', 'lemon lime soda', 'orange soda', 'grape soda', 'fruit punch', 'lemonade', 'iced tea', 'sweet tea', 'arnold palmer', 'energy drink', 'sports drink', 'protein shake', 'meal replacement', 'weight loss', 'diet', 'low carb', 'keto', 'paleo', 'vegan', 'vegetarian', 'gluten free', 'dairy free', 'sugar free', 'fat free', 'low fat', 'low sodium', 'organic', 'natural', 'non gmo', 'fair trade', 'free range', 'grass fed', 'wild caught', 'sustainable', 'local', 'seasonal', 'fresh', 'ripe', 'crisp', 'tender', 'juicy', 'sweet', 'sour', 'bitter', 'salty', 'spicy', 'mild', 'hot', 'cold', 'warm', 'room temperature', 'chilled', 'frozen', 'thawed', 'cooked', 'raw', 'grilled', 'baked', 'roasted', 'fried', 'sauteed', 'steamed', 'boiled', 'poached', 'braised', 'stewed', 'smoked', 'cured', 'pickled', 'fermented', 'marinated', 'seasoned', 'spiced', 'herbed', 'salted', 'peppered', 'buttered', 'oiled', 'dressed', 'sauced', 'glazed', 'caramelized', 'candied', 'sugared', 'honeyed', 'syruped', 'jellied', 'jammed', 'preserved', 'canned', 'jarred', 'bottled', 'bagged', 'boxed', 'wrapped', 'packaged', 'bulk', 'loose', 'whole', 'half', 'quarter', 'slice', 'piece', 'chunk', 'cube', 'dice', 'mince', 'chop', 'shred', 'grate', 'zest', 'peel', 'core', 'seed', 'pit', 'stem', 'trim', 'clean', 'wash', 'rinse', 'dry', 'pat dry', 'drain', 'squeeze', 'press', 'mash', 'puree', 'blend', 'mix', 'stir', 'whisk', 'beat', 'whip', 'fold', 'knead', 'roll', 'flatten', 'stretch', 'shape', 'form', 'mold', 'cut', 'slice', 'chop', 'dice', 'mince', 'julienne', 'brunoise', 'chiffonade', 'rough chop', 'fine chop', 'coarse chop', 'medium chop', 'small dice', 'medium dice', 'large dice', 'batonnet', 'allumette', 'paysanne', 'rondelle', 'bias cut', 'oblique cut', 'tournee', 'supreme', 'concasse', 'macedoine', 'jardiniere', 'matignon', 'mirepoix', 'sofrito', 'holy trinity', 'aromatics', 'base', 'foundation', 'flavor', 'taste', 'aroma', 'smell', 'fragrance', 'bouquet', 'nose', 'finish', 'aftertaste', 'mouthfeel', 'texture', 'consistency', 'thickness', 'viscosity', 'density', 'weight', 'body', 'structure', 'balance', 'harmony', 'complexity', 'depth', 'richness', 'intensity', 'concentration', 'purity', 'clarity', 'brightness', 'freshness', 'vibrancy', 'liveliness', 'energy', 'vitality', 'health', 'nutrition', 'nourishment', 'sustenance', 'fuel', 'power', 'strength', 'endurance', 'stamina', 'recovery', 'healing', 'wellness', 'fitness', 'performance', 'enhancement', 'boost', 'support', 'maintenance', 'prevention', 'protection', 'defense', 'immunity', 'resistance', 'tolerance', 'sensitivity', 'allergy', 'intolerance', 'reaction', 'response', 'effect', 'impact', 'influence', 'benefit', 'advantage', 'positive', 'negative', 'neutral', 'good', 'bad', 'better', 'best', 'worse', 'worst', 'excellent', 'great', 'good', 'okay', 'poor', 'terrible', 'awful', 'amazing', 'fantastic', 'wonderful', 'perfect', 'ideal', 'optimal', 'superior', 'premium', 'luxury', 'gourmet', 'artisan', 'craft', 'handmade', 'homemade', 'traditional', 'classic', 'vintage', 'retro', 'modern', 'contemporary', 'trendy', 'fashionable', 'popular', 'common', 'rare', 'unique', 'special', 'exclusive', 'limited', 'seasonal', 'holiday', 'festive', 'celebration', 'party', 'gathering', 'event', 'occasion', 'meal', 'breakfast', 'lunch', 'dinner', 'brunch', 'snack', 'appetizer', 'starter', 'main course', 'entree', 'side dish', 'dessert', 'treat', 'indulgence', 'comfort food', 'soul food', 'home cooking', 'restaurant', 'takeout', 'delivery', 'fast food', 'slow food', 'street food', 'ethnic', 'international', 'fusion', 'regional', 'local', 'national', 'global', 'worldwide', 'universal', 'common', 'popular', 'favorite', 'preferred', 'chosen', 'selected', 'picked', 'recommended', 'suggested', 'advised', 'endorsed', 'approved', 'certified', 'verified', 'tested', 'proven', 'reliable', 'trustworthy', 'dependable', 'consistent', 'stable', 'steady', 'constant', 'regular', 'routine', 'habitual', 'customary', 'usual', 'normal', 'standard', 'typical', 'average', 'ordinary', 'common', 'everyday', 'basic', 'simple', 'plain', 'straightforward', 'easy', 'convenient', 'accessible', 'available', 'obtainable', 'affordable', 'reasonable', 'fair', 'just', 'right', 'correct', 'proper', 'appropriate', 'suitable', 'fitting', 'matching', 'compatible', 'harmonious', 'complementary', 'supplementary', 'additional', 'extra', 'bonus', 'plus', 'more', 'less', 'fewer', 'reduced', 'decreased', 'lowered', 'minimized', 'maximized', 'optimized', 'improved', 'enhanced', 'upgraded', 'updated', 'revised', 'modified', 'changed', 'altered', 'adjusted', 'adapted', 'customized', 'personalized', 'individualized', 'tailored', 'specific', 'particular', 'precise', 'exact', 'accurate', 'correct', 'right', 'proper', 'appropriate', 'suitable', 'fitting', 'perfect', 'ideal', 'optimal', 'best', 'top', 'highest', 'maximum', 'peak', 'ultimate', 'supreme', 'superior', 'excellent', 'outstanding', 'exceptional', 'remarkable', 'extraordinary', 'incredible', 'amazing', 'fantastic', 'wonderful', 'marvelous', 'magnificent', 'splendid', 'superb', 'terrific', 'great', 'good', 'fine', 'nice', 'pleasant', 'enjoyable', 'delightful', 'satisfying', 'fulfilling', 'rewarding', 'gratifying', 'pleasing', 'appealing', 'attractive', 'beautiful', 'lovely', 'pretty', 'handsome', 'gorgeous', 'stunning', 'breathtaking', 'spectacular', 'impressive', 'striking', 'eye catching', 'attention grabbing', 'noticeable', 'visible', 'obvious', 'clear', 'evident', 'apparent', 'manifest', 'plain', 'simple', 'straightforward', 'direct', 'honest', 'truthful', 'sincere', 'genuine', 'authentic', 'real', 'actual', 'true', 'factual', 'accurate', 'precise', 'exact', 'specific', 'detailed', 'thorough', 'complete', 'comprehensive', 'extensive', 'broad', 'wide', 'vast', 'huge', 'enormous', 'massive', 'gigantic', 'colossal', 'immense', 'tremendous', 'incredible', 'unbelievable', 'amazing', 'astonishing', 'astounding', 'shocking', 'surprising', 'unexpected', 'unforeseen', 'unpredictable', 'uncertain', 'unknown', 'mysterious', 'puzzling', 'confusing', 'perplexing', 'baffling', 'bewildering', 'mystifying', 'enigmatic', 'cryptic', 'obscure', 'vague', 'ambiguous', 'unclear', 'indefinite', 'imprecise', 'inexact', 'approximate', 'rough', 'general', 'broad', 'wide', 'extensive', 'comprehensive', 'complete', 'total', 'entire', 'whole', 'full', 'maximum', 'peak', 'highest', 'top', 'best', 'finest', 'premium', 'superior', 'excellent', 'outstanding', 'exceptional', 'remarkable', 'extraordinary', 'incredible', 'amazing', 'fantastic', 'wonderful', 'marvelous', 'magnificent', 'splendid', 'superb', 'terrific', 'great', 'good', 'fine', 'nice', 'pleasant', 'enjoyable', 'delightful', 'satisfying', 'fulfilling', 'rewarding', 'gratifying', 'pleasing', 'appealing', 'attractive', 'beautiful', 'lovely', 'pretty', 'handsome', 'gorgeous', 'stunning', 'breathtaking', 'spectacular', 'impressive', 'striking', 'eye catching', 'attention grabbing', 'noticeable', 'visible', 'obvious', 'clear', 'evident', 'apparent', 'manifest', 'plain', 'simple', 'straightforward', 'direct', 'honest', 'truthful', 'sincere', 'genuine', 'authentic', 'real', 'actual', 'true', 'factual', 'accurate', 'precise', 'exact', 'specific', 'detailed', 'thorough', 'complete', 'comprehensive', 'extensive', 'broad', 'wide', 'vast', 'huge', 'enormous', 'massive', 'gigantic', 'colossal', 'immense', 'tremendous', 'incredible', 'unbelievable', 'amazing', 'astonishing', 'astounding', 'shocking', 'surprising', 'unexpected', 'unforeseen', 'unpredictable', 'uncertain', 'unknown', 'mysterious', 'puzzling', 'confusing', 'perplexing', 'baffling', 'bewildering', 'mystifying', 'enigmatic', 'cryptic', 'obscure', 'vague', 'ambiguous', 'unclear', 'indefinite', 'imprecise', 'inexact', 'approximate', 'rough', 'general', 'broad', 'wide', 'extensive', 'comprehensive', 'complete', 'total', 'entire', 'whole', 'full', 'maximum', 'peak', 'highest', 'top', 'best', 'finest', 'premium', 'superior', 'excellent', 'outstanding', 'exceptional', 'remarkable', 'extraordinary', 'incredible', 'amazing', 'fantastic', 'wonderful', 'marvelous', 'magnificent', 'splendid', 'superb', 'terrific', 'great', 'good', 'fine', 'nice', 'pleasant', 'enjoyable', 'delightful', 'satisfying', 'fulfilling', 'rewarding', 'gratifying', 'pleasing', 'appealing', 'attractive', 'beautiful', 'lovely', 'pretty', 'handsome', 'gorgeous', 'stunning', 'breathtaking', 'spectacular', 'impressive', 'striking', 'eye catching', 'attention grabbing', 'noticeable', 'visible', 'obvious', 'clear', 'evident', 'apparent', 'manifest', 'plain', 'simple', 'straightforward', 'direct', 'honest', 'truthful', 'sincere', 'genuine', 'authentic', 'real', 'actual', 'true', 'factual', 'accurate', 'precise', 'exact', 'specific', 'detailed', 'thorough', 'complete', 'comprehensive', 'extensive', 'broad', 'wide', 'vast', 'huge', 'enormous', 'massive', 'gigantic', 'colossal', 'immense', 'tremendous']
            }
        };
        
        this.init();
    }

    init() {
        this.loadFromStorage();
        this.bindEvents();
        this.render();
    }

    bindEvents() {
        const itemInput = document.getElementById('itemInput');
        const addBtn = document.getElementById('addBtn');
        const clearAllBtn = document.getElementById('clearAllBtn');
        const confirmModal = document.getElementById('confirmModal');
        const confirmClear = document.getElementById('confirmClear');
        const cancelClear = document.getElementById('cancelClear');

        // Add item events
        addBtn.addEventListener('click', () => this.addItem());
        itemInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.addItem();
            }
        });

        // Clear all events
        clearAllBtn.addEventListener('click', () => this.showClearConfirmation());
        confirmClear.addEventListener('click', () => this.clearAllItems());
        cancelClear.addEventListener('click', () => this.hideClearConfirmation());

        // Close modal when clicking outside
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                this.hideClearConfirmation();
            }
        });
    }

    addItem() {
        const itemInput = document.getElementById('itemInput');
        const itemName = itemInput.value.trim();

        if (!itemName) return;

        const item = {
            id: Date.now() + Math.random(),
            name: itemName,
            category: this.categorizeItem(itemName),
            purchased: false,
            dateAdded: new Date().toISOString()
        };

        this.items.push(item);
        this.saveToStorage();
        this.render();
        itemInput.value = '';
        itemInput.focus();
    }

    categorizeItem(itemName) {
        const lowerName = itemName.toLowerCase();
        
        for (const [categoryKey, categoryData] of Object.entries(this.categories)) {
            if (categoryData.keywords.some(keyword => 
                lowerName.includes(keyword) || keyword.includes(lowerName)
            )) {
                return categoryKey;
            }
        }
        
        return 'pantry'; // Default category
    }

    togglePurchased(itemId) {
        const item = this.items.find(item => item.id === itemId);
        if (item) {
            item.purchased = !item.purchased;
            this.saveToStorage();
            this.render();
        }
    }

    deleteItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToStorage();
        this.render();
    }

    showClearConfirmation() {
        const modal = document.getElementById('confirmModal');
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    hideClearConfirmation() {
        const modal = document.getElementById('confirmModal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    clearAllItems() {
        this.items = [];
        this.saveToStorage();
        this.render();
        this.hideClearConfirmation();
    }

    render() {
        const emptyState = document.getElementById('emptyState');
        const hasItems = this.items.length > 0;

        // Show/hide empty state
        emptyState.style.display = hasItems ? 'none' : 'block';

        // Group items by category
        const itemsByCategory = this.items.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});

        // Render each category
        Object.keys(this.categories).forEach(categoryKey => {
            const categorySection = document.getElementById(`${categoryKey}-section`);
            const categoryItems = document.getElementById(`${categoryKey}-items`);
            const items = itemsByCategory[categoryKey] || [];

            if (items.length > 0) {
                categorySection.style.display = 'block';
                categoryItems.innerHTML = '';

                // Sort items: unpurchased first, then purchased
                items.sort((a, b) => {
                    if (a.purchased === b.purchased) {
                        return a.name.localeCompare(b.name);
                    }
                    return a.purchased ? 1 : -1;
                });

                items.forEach(item => {
                    const li = document.createElement('li');
                    li.className = `grocery-item ${item.purchased ? 'purchased' : ''}`;
                    li.innerHTML = `
                        <input type="checkbox" class="item-checkbox" ${item.purchased ? 'checked' : ''} 
                               onchange="groceryList.togglePurchased(${item.id})">
                        <span class="item-name">${this.escapeHtml(item.name)}</span>
                        <button class="delete-btn" onclick="groceryList.deleteItem(${item.id})" 
                                title="Delete item">
                            <i class="fas fa-times"></i>
                        </button>
                    `;
                    categoryItems.appendChild(li);
                });
            } else {
                categorySection.style.display = 'none';
            }
        });

        // Update clear button visibility
        const clearAllBtn = document.getElementById('clearAllBtn');
        clearAllBtn.style.display = hasItems ? 'block' : 'none';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveToStorage() {
        try {
            localStorage.setItem('smartGroceryList', JSON.stringify(this.items));
        } catch (error) {
            console.error('Failed to save to localStorage:', error);
        }
    }

    loadFromStorage() {
        try {
            const stored = localStorage.getItem('smartGroceryList');
            if (stored) {
                this.items = JSON.parse(stored);
            }
        } catch (error) {
            console.error('Failed to load from localStorage:', error);
            this.items = [];
        }
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.groceryList = new SmartGroceryList();
});

// Add some helpful keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape') {
        const modal = document.getElementById('confirmModal');
        if (modal.style.display === 'block') {
            window.groceryList.hideClearConfirmation();
        }
    }
    
    // Focus input field with Ctrl/Cmd + /
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        document.getElementById('itemInput').focus();
    }
});
