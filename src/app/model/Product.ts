import { Category } from './category';

export interface Product {
  /**Id represents Code barre or Barcode */
  /* 
  private static final long serialVersionUID = 5953175389055800391L;
	private Double quantity;
	private Double taxe;
	private Double rating;
	private String description;
	private Boolean available;
	private String imageFileName;
	private CategoryType categoryType;
  */
  id: number;
  price: number;
  quantity: number;
  taxe?: number;
  rating: number;
  name: string;
  description: string;
  available: boolean;
  imageFileName: string;
  category?: Category;
}
