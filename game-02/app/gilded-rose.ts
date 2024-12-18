export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    Sulturas: string = 'Sulfuras, Hand of Ragnaros';
    AgedBrie: string = 'Aged Brie';
    Backstage: string = 'Backstage passes to a TAFKAL80ETC concert';
    Conjured: string = 'Conjured';

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            let item = this.items[i];

            if (item.name === this.Sulturas)
                continue;
            
            item.sellIn -= 1;

            let qualityChange = 1;

            if (item.name === this.Conjured) 
                qualityChange = 2;

            if (item.name !== this.AgedBrie && item.name !== this.Backstage) {
                if (item.quality > 0)
                    item.quality -= qualityChange;
            }
            else{
                if (item.quality < 50) {
                    item.quality += qualityChange;
    
                    if (item.name === this.Backstage) {
                        if (item.sellIn < 6) 
                            item.quality += 1;
                        if (item.sellIn < 11) 
                            item.quality += 1;
                    }
                }
            }
            if (item.sellIn < 0) {
                if (item.name === this.AgedBrie && item.quality < 50)
                    item.quality += 1;
                else if (item.name === this.Backstage)
                    item.quality = 0;
                else if (item.quality > 0)
                    item.quality -= qualityChange;
            }

            item.quality = Math.min(Math.max(item.quality, 0), 50);
        }

        return this.items;
    }
}
