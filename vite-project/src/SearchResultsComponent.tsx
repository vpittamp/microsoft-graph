import { SearchResults } from '@microsoft/mgt-react';

const SearchResultsComponent = () => (
  <SearchResults entityTypes={['driveItem']} fetchThumbnail={true} queryString="contoso"></SearchResults>
);

export default SearchResultsComponent;