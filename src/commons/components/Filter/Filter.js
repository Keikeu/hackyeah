import React, { Fragment, useState } from "react";
import T from "prop-types";
import styled from "styled-components/macro";
import TextInput from "../TextInput";
import Typography from "../Typography";
import Flexbox from "../Flexbox";
import Divider from "../Divider";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import { useUpdateEffect } from "commons/util/useUpdateEffect";

const Wrap = styled.div`
  position: relative;
  height: 480px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 4px;
  color: var(--neutral-120);
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 64px);
  overflow: auto;
  background-color: var(--neutral-200);
  border: 1px solid var(--neutral-180);
  border-radius: var(--border-radius-1) var(--border-radius-1) 0 0;
`;

const SearchWrap = styled.div`
  position: sticky;
  top: 0px;
  border-bottom: 1px solid var(--neutral-180);
  background-color: var(--neutral-200);
  padding: 8px;
`;

const SearchInput = styled(TextInput)`
  div {
    background-color: var(--neutral-190);
  }
`;

const Options = styled.div`
  overflow: auto;
  padding-bottom: 40px;
`;

const Items = styled.div`
  padding: 8px;
`;

const Category = styled(Flexbox)`
  padding: 16px;
  border-radius: var(--border-radius-0);
  cursor: pointer;

  &:hover {
    background-color: var(--neutral-190);
  }
`;

const Item = styled(Flexbox)`
  padding: 8px;
  border-radius: var(--border-radius-1);
  cursor: pointer;

  &:hover {
    background-color: var(--neutral-190);
  }
`;

const CheckboxStyled = styled(Checkbox)`
  align-items: center;

  .check {
    margin-top: 0;
  }
`;

const Count = styled.span`
  color: var(--neutral-120);
  user-select: none;
`;

const ClearWrap = styled(Flexbox)`
  padding: 10px 16px;
  background-color: var(--neutral-190);
  border: 1px solid var(--neutral-180);
  border-top: none;
  color: var(--neutral-140);
  border-radius: var(--border-radius-0) var(--border-radius-0) var(--border-radius-1) var(--border-radius-1);
  cursor: pointer;

  &:hover {
    background-color: var(--neutral-180);
    color: var(--neutral-120);
  }
`;

function Filter({ className, label, selectedItems = [], setSelectedItems, options, searchPlaceholder }) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [filterOptions, setFilterOptions] = useState(options);

  useUpdateEffect(() => {
    if (searchPhrase) {
      setFilterOptions(
        options
          .map(el => ({
            ...el,
            items: el.items.filter(t => t.searchText.includes(searchPhrase.toLowerCase())),
          }))
          .filter(el => !!el.items.length)
      );
    } else {
      setFilterOptions(options);
    }
  }, [searchPhrase]);

  function handleCategoryClick(categoryId) {
    const newFilterOptions = [...filterOptions];
    const category = newFilterOptions.find(o => o.id === categoryId);
    category.isExpanded = !category.isExpanded;
    setFilterOptions(newFilterOptions);
  }

  function handleCheckboxClick(categoryId, itemId, isChecked) {
    const newFilterOptions = [...filterOptions];
    const item = newFilterOptions.find(o => o.id === categoryId).items.find(i => i.id === itemId);
    item.isChecked = !isChecked;
    setFilterOptions(newFilterOptions);

    if (isChecked) {
      setSelectedItems(selectedItems.filter(el => el !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  }

  function clearFilter() {
    const newFilterOptions = filterOptions.map(el => ({
      ...el,
      items: el.items.map(i => ({ ...i, isChecked: false })),
    }));
    setFilterOptions(newFilterOptions);
    setSelectedItems([]);
  }

  return (
    <Wrap>
      {label && <Label>{label}</Label>}
      <Box className={className}>
        <SearchWrap>
          <SearchInput
            placeholder={searchPlaceholder}
            value={searchPhrase}
            onChange={setSearchPhrase}
            leftIcon="search"
          />
        </SearchWrap>
        <Options>
          {filterOptions.map(option => {
            return (
              <Fragment key={option.id}>
                <Category
                  justifyContent="space-between"
                  onClick={() => handleCategoryClick(option.id)}
                  isExpanded={option.isExpanded}
                >
                  <Typography variant="body">{option.label}</Typography>
                  <Icon name={option.isExpanded ? "expand_less" : "expand_more"} size={20} />
                </Category>
                {option.isExpanded && (
                  <Items>
                    {option.items.map(item => (
                      <Item
                        key={item.id}
                        justifyContent="space-between"
                        alignItems="center"
                        onClick={() => handleCheckboxClick(option.id, item.id, item.isChecked)}
                      >
                        <CheckboxStyled label={item.label} isChecked={selectedItems.includes(item.id)} />
                        <Count>{item.count}</Count>
                      </Item>
                    ))}
                  </Items>
                )}
                <Divider />
              </Fragment>
            );
          })}
        </Options>
      </Box>
      <ClearWrap gap={8} onClick={clearFilter}>
        <Icon name="playlist_remove" size={20} />
        Clear filter
      </ClearWrap>
    </Wrap>
  );
}

Filter.propTypes = {
  className: T.string,
  label: T.string,
  selectedItems: T.array,
  setSelectedItems: T.func,
  options: T.arrayOf(T.object),
  searchPlaceholder: T.string,
};

export default Filter;
