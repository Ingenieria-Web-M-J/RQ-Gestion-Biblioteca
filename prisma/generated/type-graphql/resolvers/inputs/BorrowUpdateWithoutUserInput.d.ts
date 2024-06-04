import { BookUpdateOneRequiredWithoutBorrowRecordsNestedInput } from "../inputs/BookUpdateOneRequiredWithoutBorrowRecordsNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BorrowUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    borrowedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    book?: BookUpdateOneRequiredWithoutBorrowRecordsNestedInput | undefined;
}
