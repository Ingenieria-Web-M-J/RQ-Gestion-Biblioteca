import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutBooksNestedInput } from "../inputs/UserUpdateOneRequiredWithoutBooksNestedInput";
export declare class BorrowUpdateWithoutBookInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    borrowedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    returnedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutBooksNestedInput | undefined;
}
