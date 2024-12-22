import AsyncStorage from '@react-native-async-storage/async-storage';
import Entries from './data';

class QuoteDatabase {
  constructor() {
    this.storageKey = 'quotes';
    this.autoIncrementKey = 'quote_auto_id';
    this.initializeDatabase();
  }

  async initializeDatabase() {
    try {
      const quotes = await this.getAll();
      if (quotes.length === 0) {
        // If the database is empty, add the initial quotes
        for (const quoteData of Entries) {
          await this.add(quoteData);
        }
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  async _generateId() {
    try {
      const currentId = await AsyncStorage.getItem(this.autoIncrementKey);
      const newId = currentId ? parseInt(currentId, 10) + 1 : 0;
      await AsyncStorage.setItem(this.autoIncrementKey, newId.toString());
      return newId;
    } catch (error) {
      console.error('Error generating ID:', error);
      return 1; // Default ID if something goes wrong
    }
  }

  async getAll() {
    try {
      const jsonValue = await AsyncStorage.getItem(this.storageKey);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  async add(quoteData) {
    try {
      const quotes = await this.getAll();
      const newQuote = {
        id: await this._generateId(),
        ...quoteData,
      };
      quotes.unshift(newQuote);
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(quotes));
      return newQuote;
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }

  async update(updatedData) {
    try {
      const quotes = await this.getAll();
      const quoteIndex = quotes.findIndex((q) => q.id === updatedData.id);
      if (quoteIndex !== -1) {
        quotes[quoteIndex] = { ...quotes[quoteIndex], ...updatedData };
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(quotes));
        return quotes[quoteIndex];
      } else {
        throw new Error('Quote not found');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  async delete(id) {
    try {
      const quotes = await this.getAll();
      const filteredQuotes = quotes.filter((q) => q.id !== id);
      await AsyncStorage.setItem(this.storageKey, JSON.stringify(filteredQuotes));
      console.log(id, 'deleted!'); 
      return filteredQuotes;
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  async reset() {
    try {
      await this.clearDb();
      await this.initializeDatabase();
      await this.SetQuoteOfDay();
    } catch (er) {
      console.error('Error:', er);
    }
  }

  async clearDb() {
    try {
      await AsyncStorage.clear();
    } catch (er) {
      console.error('Error:', er);
    }
  }

  async getById(id) {
    try {
      const quotes = await this.getAll();
      return quotes.find((q) => q.id === id) || null;
    } catch (error) {
      console.error('Error fetching quote by ID:', error);
      return null;
    }
  }

  async getRandom() {
    try {
      const quotes = await this.getAll();
      if (quotes.length === 0) return null;
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    } catch (error) {
      console.error('Error fetching random quote:', error);
      return null;
    }
  }

  async searchByAuthor(phrase) {
    console.log("search phrase:", phrase);
    if ( !phrase || phrase === '' ) {
      return this.getAll();
    }
    try {
      const quotes = await this.getAll();
      const filteredQuotes = quotes.filter(
        (quote) => quote.author && quote.author.toLowerCase().includes(phrase.toLowerCase())
      );
      return filteredQuotes;
    } catch (error) {
      console.error('Error searching by author:', error);
      return [];
    }
  }

  async SetQuoteOfDay() {
    const now = new Date();
    try {
      const data = await this.getRandom();
      const idObj = {id: data.id, today: now.getDate()};
      console.log('quote of the day object:', idObj);
      await AsyncStorage.setItem('today', JSON.stringify(idObj));
      return idObj.id;
    } catch (e) {
      console.log('Couldnt update quote of day!', e);
    }
  }

  async GetQuoteOfDay() {
    const now = new Date();
    const quote = AsyncStorage.getItem('today');
    // console.log('now:', now.getDate(), 'today:', quote);
    try {
      const data = await AsyncStorage.getItem('today');
      const today = data != null ? JSON.parse(data) : 'no value';
      console.log('today:', today);
      if (today.today !== now.getDate()) {
        console.log('days are not same!');
        return await this.SetQuoteOfDay().id;
      }
      return today.id;
    } catch(e) {
      console.log("Error occured!", e);
    }
  }
}

// Export an instance of the database class
const db = new QuoteDatabase();
export default db;
