import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSale from './sale.reducer';

export const selectSaleState = createFeatureSelector<fromSale.State>(
  fromSale.saleFeatureKey
);

export const selectSaleList = createSelector(selectSaleState, (s) => s.sales);

export const selectLoadingSales = createSelector(
  selectSaleState,
  (s) => s.loadingSales
);

export const selectSalesError = createSelector(selectSaleState, (s) => s.error);