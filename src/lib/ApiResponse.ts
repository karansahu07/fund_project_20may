export class ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
    pagination: null | {
      totalRecords: number;
      totalPages: number;
      currentPage: number;
    };
  
    constructor(
      success: boolean,
      message: string,
      data: T,
      pagination: ApiResponse<T>['pagination'] = null
    ) {
      this.success = success;
      this.message = message;
      this.data = data;
      this.pagination = pagination;
    }
  }
  