import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { BasicInfoFormData } from "../../../components/createPropertyForm/BasicInfo/BasicInfo";
import { CharacteristicsFormData } from "../../../components/createPropertyForm/Characteristics/Characteristics";
import { AdditionalFormData } from "../../../components/createPropertyForm/Additional/Additional";
import { isEqualObjects } from "../../../utils/utils";
import { AddressDTO, PropertyDTO } from "../../../api";

// Define a type for the slice state
export interface EditPropertyState {
  isInitialized: boolean;
  operationType: string;
  style: string | undefined;
  youtubeLinks: string[];
  amenities: string[];
  materials: string[];
  securities: string[];
  contacts: Contact[];
  openHouses: OpenHouse[];
  propertyType: string | undefined;
  addressDropdowns: {
    state: string | undefined;
    city: string | undefined;
    town: string | undefined;
  };
  address: AddressDTO;
  basicInfo: BasicInfoFormData;
  characteristics: CharacteristicsFormData;
  additional: AdditionalFormData;
  currentStep: Step;
}

export enum Step {
  BasicInfo,
  Address,
  Characteristics,
  OptionalInfo,
  Multimedia,
  Additional,
  Confirmation,
}

export interface OpenHouse {
  day: string;
  initialTime: string;
  finalTime: string;
}

interface Contact {
  label: string;
  email: string;
}

// Define the initial state using that type
const initialState: EditPropertyState = {
  isInitialized: false,
  operationType: "SALE",
  style: undefined,
  youtubeLinks: [],
  amenities: [],
  materials: [],
  securities: [],
  contacts: [],
  openHouses: [],
  propertyType: undefined,
  address: {
    stateId: "",
    state: "",
    cityId: "",
    city: "",
    street: "",
    number: 0,
    coordinates: { lat: 0, long: 0 },
  },
  addressDropdowns: {
    state: undefined,
    city: undefined,
    town: undefined,
  },
  basicInfo: {
    expenses: undefined,
    price: undefined,
    title: "",
  },
  characteristics: {
    constructionYear: undefined,
    coveredSurface: undefined,
    floors: undefined,
    fullBaths: undefined,
    parkDescription: "",
    rooms: undefined,
    toilets: undefined,
    totalSurface: undefined,
    environments: undefined,
  },
  additional: {
    description: "",
  },
  currentStep: Step.BasicInfo,
};

export const editPropertyFormSlice = createSlice({
  name: "editPropertyForm",

  initialState,
  reducers: {
    reset: () => {
      return initialState;
    },
    setStep: (state, action: PayloadAction<Step>) => {
      state.currentStep = action.payload;
    },
    setInitialValues: (state, action: PayloadAction<PropertyDTO>) => {
      state.operationType = action.payload.condition;
      state.basicInfo.title = action.payload.title;
      state.basicInfo.price = action.payload.price;
      state.basicInfo.expenses = action.payload.expenses;
      state.style = action.payload.style.id;
      state.address.state = action.payload.address.state;
      state.address.stateId = action.payload.address.stateId;
      state.address.city = action.payload.address.city;
      state.address.cityId = action.payload.address.cityId;
      state.address.street = action.payload.address.street;
      state.address.number = action.payload.address.number;
      state.address.coordinates = action.payload.address.coordinates;
      state.characteristics.constructionYear = action.payload.constructionDate;
      state.characteristics.coveredSurface = action.payload.coveredSquareFoot;
      state.characteristics.environments = action.payload.environments;
      state.characteristics.floors = action.payload.levels;
      state.characteristics.rooms = action.payload.rooms;
      state.characteristics.fullBaths = action.payload.fullBaths;
      state.characteristics.parkDescription = action.payload.parkDescription;
      state.characteristics.toilets = action.payload.toilets;
      state.characteristics.totalSurface = action.payload.squareFoot;
      state.additional.description = action.payload.comments;
      state.youtubeLinks = action.payload.links;
      state.amenities = action.payload.amenities.map((amenity) => {
        return amenity.id;
      });
      state.securities = action.payload.security.map((security) => {
        return security.id;
      });
      state.materials = action.payload.materials.map((material) => {
        return material.id;
      });
      state.openHouses = action.payload.openHouse.map((date) => ({
        ...date,
        initialTime: date.initialTime as string,
        finalTime: date.finalTime as string,
      }));
      state.contacts = action.payload.contacts;
      state.isInitialized = true;
    },
    setStyle: (state, action: PayloadAction<string>) => {
      state.style = action.payload;
    },
    addYoutubeLink: (state, action: PayloadAction<string>) => {
      state.youtubeLinks.push(action.payload);
    },
    addAmenity: (state, action: PayloadAction<string>) => {
      state.amenities.push(action.payload);
    },
    addMaterial: (state, action: PayloadAction<string>) => {
      state.materials.push(action.payload);
    },
    addSecurity: (state, action: PayloadAction<string>) => {
      state.securities.push(action.payload);
    },
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    addOpenHouse: (state, action: PayloadAction<OpenHouse>) => {
      state.openHouses.push(action.payload);
    },
    setPropertyType: (state, action: PayloadAction<string>) => {
      state.propertyType = action.payload;
    },
    setAddress: (state, action: PayloadAction<AddressDTO>) => {
      state.address = action.payload;
    },
    setState: (state, action: PayloadAction<string>) => {
      state.addressDropdowns.state = action.payload;
    },
    setCity: (state, action: PayloadAction<string | undefined>) => {
      state.addressDropdowns.city = action.payload;
    },
    setTown: (state, action: PayloadAction<string | undefined>) => {
      state.addressDropdowns.town = action.payload;
    },
    setBasicInfo: (state, action: PayloadAction<BasicInfoFormData>) => {
      state.basicInfo = action.payload;
    },
    removeAmenity: (state, action: PayloadAction<string>) => {
      state.amenities = state.amenities.filter((id) => id !== action.payload);
    },
    removeSecurity: (state, action: PayloadAction<string>) => {
      state.securities = state.securities.filter((id) => id !== action.payload);
    },
    removeMaterial: (state, action: PayloadAction<string>) => {
      state.materials = state.materials.filter((id) => id !== action.payload);
    },
    setCharacteristics: (
      state,
      action: PayloadAction<CharacteristicsFormData>
    ) => {
      state.characteristics = action.payload;
    },

    setAdditional: (state, action: PayloadAction<AdditionalFormData>) => {
      state.additional = action.payload;
    },
    setOperationType: (state, action: PayloadAction<string>) => {
      state.operationType = action.payload;
    },
    removeYoutubeLink: (state, action: PayloadAction<string>) => {
      state.youtubeLinks = state.youtubeLinks.filter(
        (link) => link !== action.payload
      );
    },
    removeContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        ({ email }) => email !== action.payload
      );
    },
    removeOpenHouseDate: (state, action: PayloadAction<OpenHouse>) => {
      state.openHouses = state.openHouses.filter(
        (openHouse) => !isEqualObjects(openHouse, action.payload)
      );
    },
  },
});

export const editPropertyFormReducer = {
  editPropertyForm: editPropertyFormSlice.reducer,
};

export const editPropertyFormActions = {
  editPropertyForm: editPropertyFormSlice.actions,
};

// Other code such as selectors can use the imported `RootState` type
export const selectCurrentStep = (state: RootState) =>
  state.editPropertyForm.currentStep;

export const selectYoutubeLinks = (state: RootState) =>
  state.editPropertyForm.youtubeLinks;

export const selectAmenities = (state: RootState) =>
  state.editPropertyForm.amenities;

export const selectMaterials = (state: RootState) =>
  state.editPropertyForm.materials;

export const selectSecurities = (state: RootState) =>
  state.editPropertyForm.securities;

export const selectContacts = (state: RootState) =>
  state.editPropertyForm.contacts;

export const selectPropertyTypes = (state: RootState) =>
  state.editPropertyForm.propertyType;

export const selectOperationType = (state: RootState) =>
  state.editPropertyForm.operationType;

export const selectAddress = (state: RootState) =>
  state.editPropertyForm.address;

export const selectCreatePropertyState = (state: RootState) =>
  state.editPropertyForm;

export const selectOpenHouses = (state: RootState) =>
  state.editPropertyForm.openHouses;

export const selectIsInitialized = (state: RootState) =>
  state.editPropertyForm.isInitialized;
