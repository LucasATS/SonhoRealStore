/**
 * Retornar todos os produtos ou um produto especifico
 * @param id string - Se não passar o id, ele irá retornar todos os produtos
 * @returns [], {}
 */
export const getProduto = async (id = '') => {
    try {
        const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
        
        return await resp.json();
    } catch (error) {
        return null;
    }
}